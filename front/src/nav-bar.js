import React from 'react';
import { Home, Search, Bell, User } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Aluma</div>
        <div className="flex space-x-4">
          <NavItem icon={<Home size={20} />} text="Home" />
          <NavItem icon={<Search size={20} />} text="Search" />
          <NavItem icon={<Bell size={20} />} text="Notifications" />
          <NavItem icon={<User size={20} />} text="Profile" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text }) => {
  return (
    <a href="#" className="text-gray-300 hover:text-white flex items-center">
      {icon}
      <span className="ml-1">{text}</span>
    </a>
  );
};

export default NavBar;