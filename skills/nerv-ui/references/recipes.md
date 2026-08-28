# Recipes

## Dashboard

```tsx
"use client";

import { BarChart, Card, DataGrid, Gauge } from "@mdrbx/nerv-ui";
import "@mdrbx/nerv-ui/styles.css";

const bars = [
  { label: "API", value: 92, color: "#00FFFF" },
  { label: "QUEUE", value: 68, color: "#FF9900" },
];

export function OperationsDashboard() {
  return (
    <main className="min-h-screen bg-black p-6 text-nerv-orange">
      <section className="grid gap-4 lg:grid-cols-[1fr_18rem]">
        <Card title="SERVICE READINESS">
          <BarChart bars={bars} unit="%" color="cyan" showGrid />
          <DataGrid title="RECENT EVENTS" columns={[{ key: "event", header: "EVENT" }, { key: "status", header: "STATUS" }]} data={[{ event: "DEPLOYMENT", status: "READY" }]} color="cyan" />
        </Card>
        <Card title="CURRENT LOAD"><Gauge value={68} label="LOAD" color="orange" /></Card>
      </section>
    </main>
  );
}
```

## Monitoring terminal

Place `MonitorOverlay` as a non-interactive visual layer; give logs and status a textual equivalent. Pair `TerminalDisplay` with a concise heading and use `StatusStamp` or `Badge` for explicit state. Avoid live animation when static information is sufficient.

## Authentication

Use `InputField` with visible labels, `Checkbox` for persistence, and `Button` for submission. Keep server-side authentication and error handling in the host app; this package only supplies presentation primitives.
