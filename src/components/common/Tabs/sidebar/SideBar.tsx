import SidebarFooter from "./SidebarFooter";
import SidebarHeader
    from "./SidebarHeader";

import SidebarNav
    from "./SidebarNav";


import SidebarProfile
    from "./SidebarProfile";

function SideBar() {
    return (
        <aside
            className="
        w-[300px]
        h-screen
        border-r
        flex
        flex-col
        bg-white
      "
        >
            <SidebarHeader />

            <SidebarNav />

            <div className="flex-1" />

            <SidebarFooter />

            <SidebarProfile />
        </aside>
    );
}

export default SideBar;