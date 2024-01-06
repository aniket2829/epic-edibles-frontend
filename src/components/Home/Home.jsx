import React, { useState, useEffect } from 'react';
import freshProduce from './images/FreshProduce.png';
import cannedFood from './images/Canned-Food.png';
import bakeryFood from './images/Bakery-Food.png';
import grocery from './images/Grocery.png';
import Background from './images/Welcome.png';
import {Link} from "react-router-dom" 

const Home = () => {
  const products = [
    { name: 'Fresh Produce', image: freshProduce },
    { name: 'Grocery', image: grocery },
    { name: 'Bakery', image: bakeryFood },
    { name: 'Canned Foods', image: cannedFood },
  ];

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/product/')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <div className="relative">
        <div className="absolute m-20 text-6xl z-10 font-bold text-blue-950">
          <p>Welcome to</p>
          <p className="text-7xl mt-2">EpicEdibles</p>
          <p className="absolute mt-11 text-black text-lg">
            Explore our delicious range of fresh produce, groceries, bakery items, and more!
          </p>
          <Link to={"/browse"}>
          <button className="absolute text-4xl rounded-lg mt-40 text-white p-4 bg-blue-950 border-black-2">Shop Now
          </button></Link>
        </div>
        <img className="blur-2px" src={Background} alt="background" />
      </div>

      <div className="p-2 flex flex-col mt-12">
        <p className="text-blue-950 text-4xl ml-2 rounded-xl border-bottom-2 border-black font-bold p-2">
          What we serve
        </p>
        <div className="p-5 rounded-xl grid grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.name} className="group">
              <img
                className="rounded w-full object-cover transition duration-300 transform group-hover:scale-105"
                src={product.image}
                alt={product.name}
              />
              <p className="text-center text-lg mt-2 font-semibold">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
            <p className="text-blue-950 text-4xl ml-2 rounded-xl border-bottom-2 border-black font-bold p-2">Featured Products</p>
      {product ? (
        <div className="container p-6 flex flex-row justify-center items-center gap-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product.store.inventory.slice(0, 4).map((item) => (
            <div key={item.product_name} className="hover:transform hover:scale-105 transition-transform border p-4 rounded-md">
              <img
                className="rounded-md  h-60 w-full object-cover mb-2"
                src={item.image}
                alt={item.product_name}
              />
              <p className="text-lg font-semibold">{item.product_name}</p>
              <p className="text-gray-600">₹{item.price}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
            <div className="flex items-center justify-center mt-4 mb-3">
              <button
                type="button"
                className="bg-indigo-500 rounded text-center pl-6 pr-8 py-2 flex items-center"
                disabled
              >
                <p className="mr-2 font-medium">Loading...</p>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </button>
            </div>
      )}
    </>
  );
};

export default Home;
