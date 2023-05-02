import { useRef, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SideContext } from "../../contexts/SideContext";
import { useAuthContext } from "../../hooks/useAuthContext";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(SideContext);
  console.log(sidebarOpen);
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);
  const user = useAuthContext();

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  sidebar-expanded:!w-72 2xl:!w-72 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between  -mt-6  sm:px-3">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-black hover:text-red-400"
            onClick={() => setSidebarOpen(false)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/home" className="block pt-2">
            <img className="w-60" src="/logo.png" alt="logo2" />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-12 px-5 mt-10">
          {/* Pages group */}
          <div>
            <ul className="space-y-8">
              {/* Dashboard */}

            {!user?.user?.isAdmin &&  <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 `}>
                <NavLink
                  end
                  to="/home"
                  className={`block text-[#707070] hover:text-[#E67719] truncate transition duration-150 pb-2 ${
                    pathname.includes("/home") && "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`shrink-0 h-6 w-6 fill-slate-400  hover:fill-[#E67719] &&  ${
                        pathname.includes("home") && "fill-[#14543D]"
                      } `}
                      viewBox="0 0 576 512"
                    >
                      <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                    </svg>

                    <span
                      className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 &&  ${
                        pathname.includes("home") &&
                        " text-[#14543D] font-bold text-xl"
                      } `}
                    >
                      Apply Loan
                    </span>
                  </div>
                </NavLink>
              </li>}

             {!user?.user?.isAdmin && <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("@") && "text-[#14543D] font-bold text-xl"
                }`}
              >
                <NavLink
                  end
                  to="/contributions"
                  className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                    pathname.includes("contributions") && "hover:text-black"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                        pathname.includes("contributions") && " fill-[#14543D]"
                      } `}
                      viewBox="0 0 512 512"
                    >
                      <path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z" />
                    </svg>
                    <span
                      className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 &&  ${
                        pathname.includes("contributions") &&
                        " text-[#14543D] font-bold text-xl"
                      } `}
                    >
                      Contributions
                    </span>
                  </div>
                </NavLink>
              </li>}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("profile") &&
                  "text-[#14543D] font-bold text-xl"
                }`}
              >
                <NavLink
                  end
                  to="/profile"
                  className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                    pathname.includes("profile") && "hover:text-black"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                        pathname.includes("profile") && " fill-[#14543D]"
                      } `}
                    >
                      <path d="M608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm-96 64V64.3c0-17.9-14.5-32.3-32.3-32.3H160.4C142.5 32 128 46.5 128 64.3V384h384zM211.2 202l25.5-25.3c4.2-4.2 11-4.2 15.2.1l41.3 41.6 95.2-94.4c4.2-4.2 11-4.2 15.2.1l25.3 25.5c4.2 4.2 4.2 11-.1 15.2L300.5 292c-4.2 4.2-11 4.2-15.2-.1l-74.1-74.7c-4.3-4.2-4.2-11 0-15.2z" />
                    </svg>
                    <span
                      className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 &&  ${
                        pathname.includes("profile") &&
                        " text-[#14543D] font-bold text-xl"
                      } `}
                    >
                     Edit Profile
                    </span>
                  </div>
                </NavLink>
              </li>
              {user?.user?.isAdmin && <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("view-contribution") &&
                  "text-[#14543D] font-bold text-xl"
                }`}
              >
                <NavLink
                  end
                  to="/view-contribution"
                  className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                    pathname.includes("view-contribution") && "hover:text-black"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                        pathname.includes("view-contribution") && " fill-[#14543D]"
                      } `}
                    >
                      <path d="M608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm-96 64V64.3c0-17.9-14.5-32.3-32.3-32.3H160.4C142.5 32 128 46.5 128 64.3V384h384zM211.2 202l25.5-25.3c4.2-4.2 11-4.2 15.2.1l41.3 41.6 95.2-94.4c4.2-4.2 11-4.2 15.2.1l25.3 25.5c4.2 4.2 4.2 11-.1 15.2L300.5 292c-4.2 4.2-11 4.2-15.2-.1l-74.1-74.7c-4.3-4.2-4.2-11 0-15.2z" />
                    </svg>
                    <span
                      className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 &&  ${
                        pathname.includes("view-contribution") &&
                        " text-[#14543D] font-bold text-xl"
                      } `}
                    >
                     View Contribution
                    </span>
                  </div>
                </NavLink>
              </li>}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
