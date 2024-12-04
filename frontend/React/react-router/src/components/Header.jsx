import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-500" : "text-gray-100"} `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-500" : "text-gray-100"} `
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
