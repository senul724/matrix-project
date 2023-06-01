import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex justify-center items-center py-12">
        <ul className="flex flex-row gap-20 text-md font-mono text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/introduction">Introduction</Link>
          </li>
          <li>
            <Link to="/about us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex pl-2">
    <svg class="h-6 w-6 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-9 pr-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
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
