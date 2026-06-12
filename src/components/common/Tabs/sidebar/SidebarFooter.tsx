import { bottomItems } from "@/config/sidbar.config";
import useAuthStore from "@/store/authstore";
import api from "@/utils/api";
import apiRoutes from "@/utils/apiRoutes";
import handleResponse from "@/utils/handleResponse";
import { NavLink }
    from "react-router-dom";



function SidebarFooter() {

    const logout = useAuthStore(state => state.logout)

    const handleItemClick =
        async (item: any) => {

            try {
                if (
                    item.action === "logout"
                ) {

                    await api.post(
                        apiRoutes.auth.logout
                    );

                    logout();
                }
            } catch (error) {
                console.log(error)
                handleResponse(error)
            }
        };
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

                                to={item.path || '#'}
                                onClick={() => handleItemClick(item)}

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