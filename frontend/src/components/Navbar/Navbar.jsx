import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    // {
    //   title: "About US",
    //   link: "/about-us",
    // },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn === false) {
    links.splice(2, 2);
  }
  const [Mblnav, setMblnav] = useState("hidden");

  const toggleMblnav = () => {
    setMblnav((prev) => (prev === "hidden" ? "block" : "hidden"));
  };
  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-2 items-center justify-between">
        <Link to={"/"} className=" flex items-center">
          <img
            className="h-10 me-4"
            src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">FahamBooks</h1>
        </Link>
        <div className="nav-links-fahambooks block md:flex items-center gap-4 transition-all duration-300 cursor-pointer">
          <div className="hidden md:flex gap-4">
            {links.map((items, i) => (
              <Link
                to={items.link}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
              >
                {items.title}{" "}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to={"/login"}
              className="px-4 py-1 border-[var(--color-button)] border rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to={"/sign-up"}
              className="px-4 py-1 bg-button rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
          <button
            className="block md:hidden text-white text-2xl hover:text-zinc-500"
            onClick={toggleMblnav}
          >
            <MdOutlineSegment />
          </button>
        </div>
      </nav>
      <div
        className={`${Mblnav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((items, i) => (
          <Link
            to={items.link}
            className={`${Mblnav} text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300`}
            key={i}
            onClick={toggleMblnav}
          >
            {items.title}{" "}
          </Link>
        ))}

        <Link
          to={"/login"}
          className={`${Mblnav} px-8 mb-8 text-3xl font-semibold border-[var(--color-button)] border rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}
          onClick={toggleMblnav}
        >
          Login
        </Link>
        <Link
          to={"/sign-up"}
          className={`${Mblnav} px-8 mb-8 text-3xl font-semibold bg-button rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}
          onClick={toggleMblnav}
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Navbar;
