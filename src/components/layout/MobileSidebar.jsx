/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import sideMenu from "src/data/sideBarData";
import { useState } from "react";
import LogoWhite from "src/assets/images/Logo-black.svg";
import DoubleArrown from "src/assets/images/left-double.svg";
import Avatar from "src/assets/images/Avatar.png";
import classNames from "classnames";
import { LogOutIcon } from "src/assets/SvgsIcons";
import { Link, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "src/functions/Redux/rootReducer";
// import { logoutThunk } from "src/functions/Redux/auth/authThunk";
import { getBasePath } from "src/utils/constant";
import { AnimatePresence, motion } from "framer-motion";
import { sidedata } from "src/data/sideBarData";

const MobileSidebar = ({
  openSideMenu,
  openMenu,
  setOpenMenu,
  collapaseMenu,
}) => {
  const [open, setOpen] = useState(null);
  // const [hovered, setHovered] = useState(false);

  const toggle = (index) => {
    setOpen(index === open ? null : index);
  };

  // const hoveredMenu = (openMenu: any) => {
  //   setHovered(!hovered);
  // };
  // const { currentUser } = useSelector((state: RootState) => state.auth);

  const location = useLocation();
  const currentPath = location.pathname;
  // console.log("first path: ", currentPath);
  // console.log("get base url: ", getBasePath(currentPath));

  // const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logoutThunk());
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeMultiMenu, setMultiMenu] = useState(null);

  const toggleSubmenu = (i) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(i);
    }
  };

  const toggleMultiMenu = (subIndex) => {
    if (activeMultiMenu === subIndex) {
      setMultiMenu(null);
    } else {
      setMultiMenu(subIndex);
    }
  };
  return (
    <div className="">
      <motion.aside
        initial={{ translateX: "-100%" }}
        animate={{ translateX: openSideMenu === true ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={classNames(
          "fixed top-0 left-0 z-40  h-screen transition-transform duration-[1600ms] w-[270px] "
        )}
        aria-label="MobileSidebar"
      >
        <div className="relative h-full px-3  overflow-y-auto bg-gray-100 ">
          <div className=" sticky top-0 w-full bg-gray-100 z-40 pt-2">
            <div
              className={classNames(
                "   flex items-center justify-between py-6",
                {
                  " px-4": !openMenu,
                }
              )}
            >
              <div>
                <img src={LogoWhite} alt="logo" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            {sidedata.map((item, index) => (
              <div key={index}>
                {item.isHeader ? (
                  <h2
                    className={classNames(
                      "px-4 mt-6 pb-2 text-primary-800 uppercase text-sm -ml-2",
                      {
                        hidden: openMenu === true,
                      }
                    )}
                  >
                    {item.title}
                  </h2>
                ) : (
                  <div>
                    <Link to={item.href} onClick={() => toggleSubmenu(index)}>
                      <div
                        className={classNames(
                          "flex items-center p-2 rounded-lg hover:text-primary-800 group text-base transition duration-75 hover:bg-primary-200",
                          {
                            "py-4 w-full": !openMenu,
                            "bg-primary-100 text-primary-800":
                              getBasePath(currentPath) === item.href,
                            "text-gray-600":
                              getBasePath(currentPath) !== item.href,
                          }
                        )}
                      >
                        {item.icon}
                        <span
                          className={classNames(
                            {
                              hidden: openMenu === true,
                            },
                            {
                              "group-hover:text-primary-600":
                                openMenu === false,
                            },
                            "flex-1 ms-3 text-left whitespace-nowrap group-hover:font-medium",
                            {
                              "text-primary-600 font-medium":
                                getBasePath(currentPath) === item.href,
                            },
                            {
                              "text-gray-600 font-normal":
                                getBasePath(currentPath) !== item.href,
                            }
                          )}
                        >
                          {item.title}
                        </span>

                        {item.child.length !== 0 && (
                          <span
                            className={classNames({
                              hidden: openMenu === true,
                            })}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`transition-all duration-300 ${
                                activeSubmenu === index ? "rotate-180" : ""
                              }`}
                            >
                              <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="currentColor"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    </Link>

                    {item.child && (
                      <AnimatePresence>
                        {activeSubmenu === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className={classNames({
                              hidden: openMenu === true,
                            })}
                          >
                            {item.child.map((child, childIndex) => (
                              <div key={childIndex}>
                                <Link
                                  to={child.href}
                                  onClick={() => toggleMultiMenu(childIndex)}
                                  className={`flex items-center px-4 py-2 text-sm ms-3 rounded-md my-2 text-gray-600 hover:bg-primary-200 ${
                                    location.pathname === child.href
                                      ? "bg-primary-200 text-primary-800"
                                      : ""
                                  }`}
                                >
                                  {child.icon}
                                  <span className="flex-1 ms-3 text-left group-hover:font-medium">
                                    {child.title}
                                  </span>
                                </Link>

                                {child.nested && (
                                  <AnimatePresence>
                                    {activeMultiMenu === childIndex && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                      >
                                        {child.nested.map(
                                          (nested, nestedIndex) => (
                                            <Link
                                              key={nestedIndex}
                                              to={nested.href}
                                              className={`block px-4 rounded-md py-2 ms-8 text-sm font-bold text-gray-100 hover:bg-gray-700 ${
                                                location.pathname ===
                                                nested.href
                                                  ? "bg-gray-700"
                                                  : ""
                                              }`}
                                            >
                                              <span>{nested.title}</span>
                                            </Link>
                                          )
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-start justify-between py-6 my-6   border-t border-white/20">
            <div className="flex items-center gap-4">
              <img
                className={classNames(" rounded-full w-10 h-10")}
                src={Avatar}
                alt="avatar"
              />
              <div className={classNames("font-medium text-gray-800")}>
                <h2 className=" capitalize">Admin</h2>
                <p className="text-sm text-gray-600 font-light ">
                  admin@example.com
                </p>
              </div>
            </div>
            <div
              // onClick={handleLogout}
              className={classNames(" text-primary-800 cursor-pointer")}
            >
              <LogOutIcon />
            </div>
          </div>
        </div>
      </motion.aside>
      {/* </aside> */}
    </div>
  );
};

export default MobileSidebar;
