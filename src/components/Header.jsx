/* eslint-disable react/prop-types */
import { useState } from "react";

import menu from "src/data/menu.jsx";
import logo from "src/assets/images/Logo.svg";
import classNames from "classnames";

import { Button } from "./Form/Button";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

function Menu({ children, open }) {
  return (
    <div
      className={classNames(
        "fixed top-0 z-50 backdrop-blur h-full max-h-screen overflow-y-auto text-white bg-gray-900 transition-all duration-700 ",
        { "w-full": open },
        { "w-0": !open }
      )}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }) {
  return (
    <div className="relative top-1/4 w-full mt-8 overflow-y-auto">
      {children}
    </div>
  );
}

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  // const { scroll } = useLocomotiveScroll();
  return (
    <>
      <div
        className={classNames(
          "font-sans  w-full h-min lg:h-full lg:space-y-10"
        )}
      >
        <header
          // data-scroll
          // data-scroll-sticky
          className={classNames(
            "bg-devblack backdrop-blur text-white fixed top-0 font-black z-40 w-full max-w-full transition-colors  "
          )}
        >
          <div className="flex items-center justify-between py-2 xl:py-3 xl:container xl:mx-auto px-4 md:px-12 lg:px-10 xl:px-5 ">
            <Link to="/">
              <span className="shrink-0 block">
                <img src={logo} className="" alt="" />
              </span>
            </Link>

            {/* Menu / Actions */}
            <div className="invisible fixed inset-0 z-10 items-center opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 ">
              <nav className="navbar w-full">
                <ul className="font-medium flex items-center md:space-x-8 ">
                  {menu.map(({ url, title }, index) => (
                    <NavLink key={index} url={url} title={title} />
                  ))}
                  <Link to="/contact">
                    <Button>contactk</Button>
                  </Link>
                </ul>
              </nav>
              {/* Actions */}
              <div className="hidden lg:flex group">
                {/* <ThemeToggle /> */}
              </div>
            </div>
            {/* Mobile Menu Actions */}
            <div className=" flex lg:hidden group">
              {/* Dark Mode SM */}
              {/* <ThemeToggle /> */}
              {/* Mobile Menu on Toggle */}
              <button
                className="border-defaultBg  group ml-2 flex h-10 w-10 items-center text-defaultBg fill-defaultBg justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent "
                aria-label="open mobile menu"
                onClick={toggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-bg lg:group-hover:fill-pink group-focus:fill-bg dark:fill-bg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                </svg>
              </button>
            </div>
          </div>
          {/* <hr className="bg-white dark:bg-bg rounded-b my-0 h-px border-0" /> */}
        </header>

        <Menu open={open}>
          <div className="sticky top-0 mx-4 z-50">
            <div className="flex z-50 items-center px-3 pb-3 pt-4 justify-between">
              <Link href="/">
                <span className="shrink-0">
                  <img src={logo} className="" alt="" />
                </span>
              </Link>

              <button
                type="button"
                onClick={toggle}
                className="btn-close p-2 bg-gray-400/20  dark:bg-gray-100 rounded-md "
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-gray-200 h-6 w-6 dark:fill-gray-800"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative mt-20 overflow-y-auto mx-7 ">
            <MenuContainer>
              <nav className="navbar w-full">
                <ul className="flex flex-col lg:flex-row">
                  {menu.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="list-none py-3 px-5 text-2xl  font-semibold opacity-100 transition-opacity"
                      >
                        <Link
                          onClick={toggle}
                          href={item.url}
                          className="font-ClashDisplay"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </MenuContainer>
            {/* <div className="text-center flex mt-10 items-center justify-center">
              <a href="">
                <Button>Let&apos;s work together</Button>
              </a>
            </div> */}
            <div className="my-14 w-full lg:hidden">
              <h6 className="text-center font-bold">Follow on Social Media</h6>
              <hr className="bg-gray-200 my-5 h-px border-0" />
              {/* Socials */}
              {/* <div className="flex items-center justify-center space-x-5">
                <a href="" className="group">
                  <Facebook width={20} height={20} />
                </a>
                <a href="" className="group">
                  <Linkin width={18} height={18} />
                </a>
                <a href="" className="group">
                  <Dribble />
                </a>
               
                <a href="j" className="group">
                  <Twitter width={20} height={20} />
                </a>
                <a href="" className="group">
                  <Instagram width={18} height={18} />
                </a>
              </div> */}
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
};
export default Header;
