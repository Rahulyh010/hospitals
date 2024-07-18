import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";

import Navbar from "./-components/Navbar";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <div className="text-foreground bg-background">
      <Navbar />
      <Toaster richColors position="top-center" />
      <div className="mt-24">
        <Outlet />
      </div>
    </div>
  );
}
