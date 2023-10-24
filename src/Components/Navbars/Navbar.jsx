import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import CoHabit from "../../assets/Cohabit Logo C 1.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    setShowNav(false);
    navigate(path); // Use navigate to navigate to the new page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="navbar bg-white border-none fixed top-0 -mt-1 z-[100]">
      <div className="navbar-start laptop:ml-[6.5rem]">
        <Link to="/">
          <img className="logo w-full" src={CoHabit} alt="web Logo" />
        </Link>
      </div>

      {/* displays on wide screen */}
      <div className="navbar-center hidden laptop:flex">
        <ul className="menu-horizontal px-1">
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className="">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "flex min-w-max rounded-none mx-2 pb-[0.3rem] border-b-[3px] px-1 border-[#010886]"
                      : "font-medium min-w-max px-1 mx-2"
                  }
                  onClick={() => handleNavLinkClick(item.path)} // Handle click here
                >
                  <span className={item.className}>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="">
          {/* hamburger menu */}
          <label
            onClick={() => setShowNav(!showNav)}
            tabIndex={0}
            className="btn btn-ghost laptop:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* mobile navbar */}
          {showNav && (
            <ul
              tabIndex={0}
              className="absolute w-[94%] pb-3 p-4 -ml-[18rem] h-auto mt-2 border border-t-2 z-[10] bg-white focus:bg-white rounded-b-box"
            >
              {NavbarData.map((item, index) => {
                return (
                  <li key={index} className="">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "flex min-w-max rounded-none font-semibold focus:bg-white p-2 border-b-[3px] border-[#305D96]"
                          : "flex rounded-none focus:bg-white min-w-max py-2 px-2"
                      }
                      onClick={() => handleNavLinkClick(item.path)} // Handle click here
                    >
                      <span className="">{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          )}
          {/* end of mobile navbar */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
