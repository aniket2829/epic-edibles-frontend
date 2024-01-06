import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Browse</button>
      {isOpen && (
        <div className='text-white absolute z-10 mt-3 rounded-md p-2 mr-5 bg-black'>
          <p>Vegetables</p>
          <p className='mt-1.5'>Bakery</p>
          <p className='mt-1.5'>Fruits</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;