import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dash/dash/")({
  component: () => <div>Hello /_dash/dash/!</div>,
});
