import { sidebarItems } from "@/config/sidbar.config";
import { NavLink }
    from "react-router-dom";


function SidebarNav() {
    return (
        <nav className="p-4">
            <div className="space-y-2">
                {sidebarItems.map(
                    (item) => {
                        const Icon =
                            item.icon;

                        return (
                            <NavLink
                                key={item.title}

                                to={item.path}

                                className={({
                                    isActive,
                                }) =>
                                    `
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  transition-all

                  ${isActive
                                        ? `
                        bg-violet-100
                        text-violet-700
                      `
                                        : `
                        hover:bg-gray-100
                      `
                                    }
                `
                                }
                            >
                                <Icon size={20} />

                                <span>
                                    {item.title}
                                </span>
                            </NavLink>
                        );
                    }
                )}
            </div>
        </nav>
    );
}

export default SidebarNav;