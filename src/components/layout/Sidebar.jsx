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
import { getBasePath } from "src/utils/constant.jsx";
import { motion, AnimatePresence } from "framer-motion";

import { sidedata } from "src/data/sideBarData";
const Sidebar = ({
  openSideMenu,
  openMenu,
  setOpenMenu,
  collapaseMenu,
  toggleOpenSideBar,
  clickOpenSideBar,
}) => {
  const [open, setOpen] = useState(null);
  // const [hovered, setHovered] = useState(false);
  console.log("first state", clickOpenSideBar);
  const toggle = (index) => {
    setOpen(index === open ? null : index);
  };

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
        initial={{ width: 65 }}
        animate={{
          width: openMenu === false || clickOpenSideBar === true ? 270 : 65,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={classNames(
          "fixed top-0 left-0 z-40  h-screen transition-transform duration-[1600ms] ",

          { "md:w-16 ": openMenu === true },
          { "w-[270px]": openMenu === false },
          { "w-[270px]": clickOpenSideBar === true }
        )}
        aria-label="Sidebar"
      >
        <div
          className="relative h-full px-3  overflow-y-auto bg-gray-100 "
          onMouseEnter={() => setOpenMenu(false)}
          onMouseLeave={() => setOpenMenu(true)}
        >
          <div className=" sticky top-0 w-full z-40 bg-gray-100 pt-2">
            <div
              className={classNames(
                "   flex items-center justify-between bg-gray-100  py-6"
                // {
                //   " px-4": !openMenu && clickOpenSideBar === false,
                // }
              )}
            >
              <div
                className={classNames("pl-4", {
                  "hidden group-hover:block":
                    openMenu === true && clickOpenSideBar === false,
                })}
              >
                <Link to="/">
                  <img src={LogoWhite} alt="logo" />
                </Link>
              </div>
              <div
                className={classNames(
                  "p-2 bg-primary-100 rounded-lg cursor-pointer ",
                  {
                    "rotate-180 ":
                      openMenu === true && clickOpenSideBar === false,
                  }
                )}
                onClick={toggleOpenSideBar}
              >
                <img src={DoubleArrown} alt="arrow" />
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
                        hidden: openMenu === true && clickOpenSideBar === false,
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
                          "flex items-center p-2 rounded-lg hover:text-primary-800 group text-base transition duration-75 hover:bg-primary-100",
                          {
                            "py-4 w-full":
                              !openMenu || clickOpenSideBar === true,
                            "bg-primary-100 text-primary-800":
                              getBasePath(currentPath) === item.href,
                            "text-tertiary-500":
                              getBasePath(currentPath) !== item.href,
                          }
                        )}
                      >
                        {item.icon}
                        <span
                          className={classNames(
                            {
                              hidden:
                                openMenu === true && clickOpenSideBar === false,
                            },
                            {
                              "group-hover:text-primary-800":
                                openMenu === false,
                            },
                            "flex-1 ms-3 text-left whitespace-nowrap group-hover:font-medium",
                            {
                              "text-primary-800 font-medium":
                                getBasePath(currentPath) === item.href,
                            },
                            {
                              "text-tertiary-800 font-normal":
                                getBasePath(currentPath) !== item.href,
                            }
                          )}
                        >
                          {item.title}
                        </span>

                        {item.child.length !== 0 && (
                          <span
                            className={classNames({
                              hidden:
                                openMenu === true && clickOpenSideBar === false,
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
                              hidden:
                                openMenu === true && clickOpenSideBar === false,
                            })}
                          >
                            {item.child.map((child, childIndex) => (
                              <div key={childIndex}>
                                <Link
                                  to={child.href}
                                  onClick={() => toggleMultiMenu(childIndex)}
                                  className={`flex items-center px-4 py-2 text-sm ms-3 rounded-md my-2 text-gray-700 hover:text-primary-800 hover:bg-primary-100 ${
                                    location.pathname === child.href
                                      ? "bg-primary-50/80 text-primary-700"
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
                                              className={`block px-4 rounded-md py-2 ms-12 text-sm font-normal text-gray-800 hover:bg-primary-100  ${
                                                location.pathname ===
                                                nested.href
                                                  ? "bg-primary-100 text-primary-700"
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
              {/* <img
                className={classNames(" rounded-full w-10 h-10")}
                src={Avatar}
                alt="avatar"
              /> */}
              <div className="relative inline-flex items-center justify-center w-11 h-11  cursor-pointer overflow-hidden bg-gray-300 rounded-full ">
                <span className="font-medium text-gray-600 uppercase text-base ">
                  OG
                  {/* {getNameInitials(currentUser?.last_name)} */}
                  {/* {getNameInitials(currentUser?.first_name)} */}
                </span>
              </div>
              <div
                className={classNames("font-medium text-gray-800", {
                  hidden: openMenu === true && clickOpenSideBar === false,
                })}
              >
                <h2 className=" capitalize">
                  Admin Admin
                  {/* {currentUser?.last_name} {currentUser?.first_name} */}
                </h2>
                <p className="text-sm text-gray-500 font-light ">
                  {/* {currentUser?.email} */}
                  admin@gmail.com
                </p>
              </div>
            </div>
            <div
              onClick={handleLogout}
              className={classNames(" text-primary-800 cursor-pointer", {
                hidden: openMenu === true && clickOpenSideBar === false,
              })}
            >
              <LogOutIcon />
            </div>
          </div>
        </div>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
