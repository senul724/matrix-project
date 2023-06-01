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
