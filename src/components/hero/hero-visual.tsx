import { AnalyticsCard } from "@/src/components/hero/analytics-card";
import { CodeEditorMockup } from "@/src/components/hero/code-editor-mockup";
import { DashboardPreview } from "@/src/components/hero/dashboard-preview";
import { DeployPill } from "@/src/components/hero/deploy-pill";
import { BrowserMockup } from "@/src/components/ui/browser-mockup";

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative hidden h-145 items-center justify-center lg:flex"
    >
      {/* Violet glow */}
      <div className="pointer-events-none absolute right-[5%] top-[10%] size-80 rounded-full bg-[radial-gradient(circle,rgba(109,94,245,0.12)_0%,transparent_70%)]" />

      {/* Cyan glow */}
      <div className="pointer-events-none absolute bottom-[10%] left-[5%] size-56 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.1)_0%,transparent_70%)]" />

      {/* Dashboard */}
      <div className="absolute right-0 top-0 z-3 w-97.5 drop-shadow-2xl">
        <BrowserMockup>
          <DashboardPreview />
        </BrowserMockup>
      </div>

      {/* Code editor */}
      <div className="absolute bottom-8 left-0 z-4 w-77.5 drop-shadow-2xl">
        <CodeEditorMockup />
      </div>

      {/* Analytics */}
      <div className="absolute -right-5 top-[42%] z-5 w-43">
        <AnalyticsCard />
      </div>

      {/* Deployment */}
      <div className="absolute left-1.5 top-[56%] z-5">
        <DeployPill />
      </div>
    </div>
  );
}
