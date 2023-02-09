const NavBar = ({ setSection }) => {
  return (
    <nav className="flex w-full justify-center">
      <div className="flex items-center justify-center rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold py-1 px-4 space-x-4 focus:outline-none">
        <button
          className="hover:bg-gray-100 hover:rounded-3xl py-2 px-3 dark:hover:bg-gray-600 focus:outline-none"
          onClick={() => setSection("all")}
        >
          Home
        </button>

        <button
          className="hover:bg-gray-100 hover:rounded-3xl py-2 px-3 dark:hover:bg-gray-600 focus:outline-none"
          onClick={() => setSection("about")}
        >
          About
        </button>

        <button className="hover:bg-gray-100 hover:rounded-3xl py-2 px-3 dark:hover:bg-gray-600 hidden focus:outline-none">
          Work
        </button>

        <button
          className="hover:bg-gray-100 hover:rounded-3xl py-2 px-3 dark:hover:bg-gray-600 focus:outline-none"
          onClick={() => setSection("contact")}
          id="Contact"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
