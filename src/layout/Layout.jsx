import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div>
      <nav className="flex justify-center items-center">
        <div className="w-24">
          <img src="/top-icon1.jpg" alt="" /> 
        </div>
        <div className="flex justify-center items-center w-3/4">
          <ul className="flex flex-row gap-20 text-xl text-gray-600 text-md">
            <li className="flex justify-center items-center">
              <Link to="/">Home</Link>
            </li>
            <li className="flex justify-center items-center">
              <Link to="/event">Community</Link>
            </li>
            <li className="flex justify-center items-center">
              <Link to="/about">About Us</Link>
            </li>
            <li className="flex justify-center items-center">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="flex justify-center items-center">
              <input class="block py-3 pr-5 pl-9 w-full bg-white rounded-md border shadow-sm sm:text-sm focus:ring-1 focus:outline-none placeholder:italic placeholder:text-slate-400 border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Search for anything..." type="text" name="search"/>
            </li>
          </ul>
        </div>
        </nav>
      </div>

      <div className="min-h-screen">
      <Outlet />
      </div>
      <div className="bg-slate-300 p-5">
      <div className="flex justify-center items-center text-md bg-transparent">
      Copyright © 2023 The Matrix All Rights Reserved
      </div>
      </div>
    </>
  )
};

export default Layout;
