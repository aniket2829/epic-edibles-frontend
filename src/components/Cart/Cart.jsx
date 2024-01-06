import React, { useState } from 'react';
import cartAdapter from '../../utils/cart';

const Cart = () => {
  const [refresh, setRefresh] = useState(false); // this is useless, just to refresh the component
  const products = cartAdapter.getAllProducts();
` `
  const handleIncrement = (item) => {
    cartAdapter.incrementQuantity(item.product_id);
    setRefresh((prev) => !prev);
  };

  const handleDecrement = (item) => {
    cartAdapter.decrementQuantity(item.product_id);
    setRefresh((prev) => !prev);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <div key={item.product_id} className="border p-4 rounded-md">
              <img
                src={item.image}
                alt={item.product_name}
                className="w-full h-52 object-cover mb-2 rounded-md"
              />
              <h2 className="text-lg font-bold">{item.product_name}</h2>
              <p className="text-gray-600">₹{item.price}</p>
              <p className="text-gray-500 mb-2">{item.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label className="mr-2">Quantity:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-16 border rounded-md p-1 text-center"
                    readOnly
                  />
                </div>

                <div>
                  <button
                    onClick={() => handleIncrement(item)}
                    className="bg-blue-500 text-white rounded-md px-3 py-1 mr-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDecrement(item)}
                    className="bg-red-500 text-white rounded-md px-3 py-1"
                  >
                    -
                  </button>
                </div>

                <button
                  onClick={() => {
                    cartAdapter.removeFromCart(item.product_id);
                    setRefresh((prev) => !prev);
                  }}
                  className="bg-blue-500 text-white rounded-md px-3 py-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
