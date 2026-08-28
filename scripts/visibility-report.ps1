param(
  [string]$SnapshotPath = "",
  [switch]$IncludeOwnerMetrics
)

$ErrorActionPreference = "Stop"
$capturedAt = (Get-Date).ToUniversalTime().ToString("o")
$fileTimestamp = (Get-Date).ToUniversalTime().ToString("yyyyMMdd-HHmmss")

if (-not $SnapshotPath) {
  $SnapshotPath = "docs/visibility/snapshots/visibility-$fileTimestamp.json"
}

function Get-PublicJson([string]$Uri) {
  Invoke-RestMethod -Uri $Uri -Headers @{ "User-Agent" = "nerv-ui-visibility-report" }
}

function Get-RepoSummary([string]$Repository) {
  $repo = Get-PublicJson "https://api.github.com/repos/$Repository"
  [ordered]@{
    repository = $Repository
    createdAt = $repo.created_at
    stars = $repo.stargazers_count
    forks = $repo.forks_count
    watchers = $repo.watchers_count
    subscribers = $repo.subscribers_count
    topics = @($repo.topics)
    updatedAt = $repo.updated_at
  }
}

$own = Get-RepoSummary "mdrbx/nerv-ui"
$competitor = Get-RepoSummary "TheGreatGildo/nerv-ui"
$npm = Get-PublicJson "https://api.npmjs.org/downloads/point/last-month/@mdrbx/nerv-ui"
$release = (Get-PublicJson "https://api.github.com/repos/mdrbx/nerv-ui/releases/latest")

$snapshot = [ordered]@{
  capturedAt = $capturedAt
  sources = [ordered]@{
    githubOwn = "https://api.github.com/repos/mdrbx/nerv-ui"
    githubCompetitor = "https://api.github.com/repos/TheGreatGildo/nerv-ui"
    npmDownloads = "https://api.npmjs.org/downloads/point/last-month/@mdrbx/nerv-ui"
  }
  project = $own
  competitor = $competitor
  npm = [ordered]@{ package = $npm.package; downloads = $npm.downloads; period = "$($npm.start)..$($npm.end)" }
  latestRelease = [ordered]@{ tag = $release.tag_name; publishedAt = $release.published_at; url = $release.html_url }
}

if ($IncludeOwnerMetrics) {
  $gh = Get-Command gh -ErrorAction SilentlyContinue
  if ($gh) {
    $null = gh auth status 2>&1
    if ($LASTEXITCODE -eq 0) {
      $snapshot.ownerMetrics = [ordered]@{
        views = (gh api repos/mdrbx/nerv-ui/traffic/views | ConvertFrom-Json)
        clones = (gh api repos/mdrbx/nerv-ui/traffic/clones | ConvertFrom-Json)
        referrers = (gh api repos/mdrbx/nerv-ui/traffic/popular/referrers | ConvertFrom-Json)
      }
    } else {
      $snapshot.ownerMetrics = "Skipped: gh is installed but not authenticated."
    }
  } else {
    $snapshot.ownerMetrics = "Skipped: gh is not installed or unavailable."
  }
}

$directory = Split-Path -Parent $SnapshotPath
if ($directory) { New-Item -ItemType Directory -Path $directory -Force | Out-Null }
$snapshot | ConvertTo-Json -Depth 8 | Set-Content -Path $SnapshotPath -Encoding utf8
$snapshot | ConvertTo-Json -Depth 4
