import { useRef, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SideContext } from "../../contexts/SideContext";
import { useAuthContext } from "../../hooks/useAuthContext";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen, setSidebarExpanded, sidebarExpanded } =
    useContext(SideContext);
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
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 ${
          sidebarExpanded && "w-20"
        }  sidebar-expanded:!w-72 2xl:!w-72 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${
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
            <img
              className={`${sidebarExpanded && "w-40"}w-60`}
              src="/logo.png"
              alt="logo2"
            />
          </NavLink>
        </div>

        {/* Links */}
        <div
          className={`space-y-12 ${
            sidebarExpanded && "px-2 md:mt-28"
          } px-5 mt-10`}
        >
          {/* Pages group */}
          <div>
            <ul className="space-y-4">
              {/* Dashboard */}

              {!user?.user?.isAdmin && (
                <li
                  onClick={() => setSidebarOpen(false)}
                  className={`px-3 ${
                    sidebarExpanded && "px-0"
                  } py-2 rounded-sm mb-0.5 last:mb-0 `}
                >
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
                        className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                          sidebarExpanded && "hidden"
                        }  ${
                          pathname.includes("home") &&
                          " text-[#14543D] font-bold text-xl"
                        } `}
                      >
                        Apply Loans
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}

              {!user?.user?.isAdmin && (
                <li
                  onClick={() => setSidebarOpen(false)}
                  className={`px-3 ${
                    sidebarExpanded && "px-0"
                  } py-2 rounded-sm mb-0.5 last:mb-0 ${
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
                          pathname.includes("contributions") &&
                          " fill-[#14543D]"
                        } `}
                        viewBox="0 0 640 512"
                      >
                        <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z" />
                      </svg>
                      <span
                        className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                          sidebarExpanded && "hidden"
                        }  ${
                          pathname.includes("contributions") &&
                          " text-[#14543D] font-bold text-xl"
                        } `}
                      >
                        Contributions
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}
              {!user?.user?.isAdmin && (
                <li
                  onClick={() => setSidebarOpen(false)}
                  className={`px-3 ${
                    sidebarExpanded && "px-0"
                  } py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("@") && "text-[#14543D] font-bold text-xl"
                  }`}
                >
                  <NavLink
                    end
                    to="/withdraw"
                    className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                      pathname.includes("withdraw") && "hover:text-black"
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                          pathname.includes("withdraw") && " fill-[#14543D]"
                        } `}
                        viewBox="0 0 576 512"
                      >
                        <path d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z" />
                      </svg>
                      <span
                        className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                          sidebarExpanded && "hidden"
                        }  ${
                          pathname.includes("withdraw") &&
                          " text-[#14543D] font-bold text-xl"
                        } `}
                      >
                        Withdraw
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}
              <li
                onClick={() => setSidebarOpen(false)}
                className={`px-3 ${
                  sidebarExpanded && "px-0"
                } py-2 rounded-sm mb-0.5 last:mb-0 ${
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
                      className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                        pathname.includes("profile")  &&  "fill-[#14543D]"
                      } `}
                      viewBox="0 0 640 512"
                    >
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z" />
                    </svg>
                    <span
                      className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                        sidebarExpanded && "hidden"
                      }  ${
                        pathname.includes("profile") &&
                        " text-[#14543D] font-bold text-xl"
                      } `}
                    >
                      Edit Profile
                    </span>
                  </div>
                </NavLink>
              </li>
              {user?.user?.isAdmin && (
                <li
                  onClick={() => setSidebarOpen(false)}
                  className={`px-3 ${
                    sidebarExpanded && "px-0"
                  } py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("view-loans") &&
                    "text-[#14543D] font-bold text-xl"
                  }`}
                >
                  <NavLink
                    end
                    to="/view-loans"
                    className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                      pathname.includes("view-loans") && "hover:text-black"
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                          pathname.includes("view-loans") && " fill-[#14543D]"
                        } `}
                      >
                        <path d="M608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm-96 64V64.3c0-17.9-14.5-32.3-32.3-32.3H160.4C142.5 32 128 46.5 128 64.3V384h384zM211.2 202l25.5-25.3c4.2-4.2 11-4.2 15.2.1l41.3 41.6 95.2-94.4c4.2-4.2 11-4.2 15.2.1l25.3 25.5c4.2 4.2 4.2 11-.1 15.2L300.5 292c-4.2 4.2-11 4.2-15.2-.1l-74.1-74.7c-4.3-4.2-4.2-11 0-15.2z" />
                      </svg>
                      <span
                        className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                          sidebarExpanded && "hidden"
                        }  ${
                          pathname.includes("view-loans") &&
                          " text-[#14543D] font-bold text-xl"
                        } `}
                      >
                        View Loans
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}
              {user?.user?.isAdmin && (
                <li
                  onClick={() => setSidebarOpen(false)}
                  className={`px-3 ${
                    sidebarExpanded && "px-0"
                  } py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("view-contribution") &&
                    "text-[#14543D] font-bold text-xl"
                  }`}
                >
                  <NavLink
                    end
                    to="/view-contribution"
                    className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                      pathname.includes("view-contribution") &&
                      "hover:text-black"
                    }`}
                  >
                    <div className="flex items-center">
                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                          pathname.includes("view-contribution") &&
                          " fill-[#14543D]"
                        } `}
                        viewBox="0 0 640 512"
                      >
                        <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z" />
                      </svg>
                      <span
                        className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                          sidebarExpanded && "hidden"
                        }  ${
                          pathname.includes("view-contribution") &&
                          " text-[#14543D] font-bold text-xl"
                        } `}
                      >
                        View Contribution
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}
              {user?.user?.isAdmin && (
                <li
                  onClick={() => setSidebarOpen(false)}
                  className={`px-3 ${
                    sidebarExpanded && "px-0"
                  } py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("view-withdrawals") &&
                    "text-[#14543D] font-bold text-xl"
                  }`}
                >
                  <NavLink
                    end
                    to="/view-withdrawals"
                    className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                      pathname.includes("view-withdrawals") &&
                      "hover:text-black"
                    }`}
                  >
                    <div className="flex items-center">
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                          pathname.includes("view-withdraw") && " fill-[#14543D]"
                        } `}
                        viewBox="0 0 576 512"
                      >
                        <path d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z" />
                      </svg>
                      <span
                        className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                          sidebarExpanded && "hidden"
                        }  ${
                          pathname.includes("view-withdrawals") &&
                          " text-[#14543D] font-bold text-xl"
                        } `}
                      >
                        View Withdrawals
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}
              {user?.user?.isAdmin && (
                <li
                  onClick={() => setSidebarOpen(false)}
                  className={`px-3 ${
                    sidebarExpanded && "px-0"
                  } py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("view-loans") &&
                    "text-[#14543D] font-bold text-xl"
                  }`}
                >
                  <NavLink
                    end
                    to="/users"
                    className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                      pathname.includes("users") && "hover:text-black"
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                          pathname.includes("users") && " fill-[#14543D]"
                        } `}
                      >
                        <path d="M608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm-96 64V64.3c0-17.9-14.5-32.3-32.3-32.3H160.4C142.5 32 128 46.5 128 64.3V384h384zM211.2 202l25.5-25.3c4.2-4.2 11-4.2 15.2.1l41.3 41.6 95.2-94.4c4.2-4.2 11-4.2 15.2.1l25.3 25.5c4.2 4.2 4.2 11-.1 15.2L300.5 292c-4.2 4.2-11 4.2-15.2-.1l-74.1-74.7c-4.3-4.2-4.2-11 0-15.2z" />
                      </svg>
                      <span
                        className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                          sidebarExpanded && "hidden"
                        }  ${
                          pathname.includes("users") &&
                          " text-[#14543D] font-bold text-xl"
                        } `}
                      >
                        Users
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className={`w-6 h-6 fill-current rotate-180 ${
                  sidebarExpanded && "rotate-0"
                }`}
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
