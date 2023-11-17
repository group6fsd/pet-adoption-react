import { useEffect } from "react";
import Auth from "./Auth";
import Menu from "./Menu";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector("#back-to-top");

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty array means this effect will only run once after initial render

  // Hamburger menu
  const handleHamburgerClick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <header className="bg-transparent fixed w-full top-0 left-0 items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-white block py-6 lg:text-2xl"
            >
              Pet Adoption
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
              onClick={handleHamburgerClick}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-orange-500 bg-opacity-80 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none lg:bg-transparent"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Menu title="Home" href="/#home" />
                </li>
                <li className="group">
                  <Menu title="Find a Pet" href="/pet" />
                </li>
                <li className="group">
                  <form className="relative">
                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder="  Search"
                      className="text-base text-white outline-none rounded-md group-hover:text-fuchsia-950 py-2 mx-8 flex lg:text-lg"
                    />
                    <button className="text-base absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </li>
                <li className="group">
                  <Auth title="Sign Up" href="/sign-up" />
                </li>
                <li className="group">
                  <Auth title="Sign In" href="/sign-in" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
