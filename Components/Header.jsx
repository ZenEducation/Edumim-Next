/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "next/link";
import logo from "../public/assets/images/logo/logo.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    //scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className=" flex items-center justify-between">
              {/* <Link
                href="/react-templates/edumim"
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
              > */}
              <a href="/react-templates/edumim">
                <Image src={logo} alt="logo" />
              </a>
              {/* </Link> */}
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li className={`menu-item-has-children `}>
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/react-templates/edumim"> Home One</a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/home-two">
                            Home Two
                          </a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/home-three">
                            Home Three
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/react-templates/edumim/about">About 1</a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/about-two">
                            About 2
                          </a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/instructor">
                            Instructor
                          </a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/instructor-two">
                            Instructor 2
                          </a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/instructor-details">
                            Instructor Single
                          </a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/event">Event</a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/event-single">
                            Event Single
                          </a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/error">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Courses</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/react-templates/edumim/courses">Courses</a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/courses-sidebar">
                            Courses Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/single-course">
                            Single Course
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/react-templates/edumim/blog-standard">
                            Blog Standard
                          </a>
                        </li>
                        <li>
                          <a href="/react-templates/edumim/single-blog">
                            Blog Single
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/react-templates/edumim/contacts">Contacts</a>
                    </li>
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className=" hidden lg:block">
                    <a href="#" className="btn btn-primary py-[15px] px-8">
                      Start Free Trial
                    </a>
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
