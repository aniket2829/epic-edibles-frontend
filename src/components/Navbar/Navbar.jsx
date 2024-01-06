import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import Dropdown from './DropDown';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex justify-between font-medium text-black text-1.5xl p-4 border-b-2 border-black">
        <p className='text-blue-950 font-bold text-2xl'>Epic Edibles</p>
        <ul className='flex space-x-4'>
          <Dropdown/>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/cart">
            <FaShoppingCart size={24} />
          </Link></li>
        </ul>
      </div>
    </>
  );
}
