import { Link } from 'react-router-dom';

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
  return (
    <div className="bg-zinc-800 text-white px-8 py-2 flex items-center justify-between">
      <div className=" flex items-center">
        <img
          className="h-10 me-4"
          src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
          alt="logo"
        />
        <h1 className="text-2xl font-semibold">FahamBooks</h1>
      </div>
      <div className="nav-links-fahambooks flex items-center gap-4 transition-all duration-300 cursor-pointer">
        <div className="flex gap-4">
          {links.map((items, i) => (
            <Link to={items.link} 
            className="hover:text-blue-500 transition-all duration-300" key={i}>
              {" "}
              {items.title}{" "}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <Link to={"/login"} className="px-2 py-1 border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Login
          </Link>
          <Link to={"/sign-up"} className="px-2 py-1 bg-button rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
