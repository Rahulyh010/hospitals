import { createFileRoute } from "@tanstack/react-router";

import Section1 from "./-components/home/Section1";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div>
      <div className="mt-24"></div>
      <Section1 />
    </div>
  );
}
