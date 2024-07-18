import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_dash")({
  component: DashLayout,
});

function DashLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
