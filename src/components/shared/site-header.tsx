import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser } from "@/components/shared/nav-user";

import { getCurrentUser } from "@/lib/auth";
export async function SiteHeader() {
  const user = await getCurrentUser();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        {user && (
          <div className="ml-auto">
            <NavUser user={user} />
          </div>
        )}
      </div>
    </header>
  );
}
