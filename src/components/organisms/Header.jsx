import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-[50%] top-0 z-50 flex items-cente">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-[#B7AB8D] rounded-full"></div>
          <span className="font-bold text-lg">I'm Jesus</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-black hover:text-gray-700">Home</a>
          <a href="#projects" className="text-gray-500 hover:text-gray-700">Projects</a>
          <a href="#contact" className="text-gray-500 hover:text-gray-700">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <box-icon name="dots-horizontal-rounded" />
          </button>
          {isOpen && (
            <div className="absolute right-4 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <a href="#home" className="block px-4 py-2 text-black hover:bg-gray-200">Home</a>
              <a href="#projects" className="block px-4 py-2 text-gray-500 hover:bg-gray-200">Projects</a>
              <a href="#contact" className="block px-4 py-2 text-gray-500 hover:bg-gray-200">Contact</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
