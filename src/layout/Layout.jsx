import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex justify-center items-center py-12">
        <ul className="flex flex-row gap-20 font-mono text-xl text-md">
          <li className="flex justify-center items-center">
            <Link to="/">Home</Link>
          </li>
          <li className="flex justify-center items-center">
            <Link to="/event">Community</Link>
          </li>
          <li className="flex justify-center items-center">
            <Link to="/introduction">Introduction</Link>
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
      </nav>

      <div className="min-h-screen">
      <Outlet />
      </div>
      <hr/>
      <div className="flex justify-center items-center my-10 text-md">
      <p>This is the footer</p>
      </div>
    </>
  )
};

export default Layout;
