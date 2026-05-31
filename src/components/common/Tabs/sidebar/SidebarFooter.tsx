import { bottomItems } from "@/config/sidbar.config";
import { NavLink }
    from "react-router-dom";



function SidebarFooter() {
    return (
        <div className="p-4">
            <div className="space-y-2">
                {bottomItems.map(
                    (item) => {
                        const Icon =
                            item.icon;

                        return (
                            <NavLink
                                key={item.title}

                                to={item.path}

                                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-gray-100
                "
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
        </div>
    );
}

export default SidebarFooter;