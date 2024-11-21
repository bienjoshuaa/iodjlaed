  import React from 'react';

  const Navbar = () => {
    return (
      <div>
        <nav className="bg-gray-900 text-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <div className="text-2xl font-bold">MyPortfolio</div>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="nav-link hover:text-blue-400 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link hover:text-blue-400 transition duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link hover:text-blue-400 transition duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link hover:text-blue-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    );
  };

  export default Navbar;