import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ShowProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  useEffect(() => {
    // Fetch similar products based on the category of the current product
    if (product) {
      const category = product.category;
      fetch(`http://127.0.0.1:8000/product/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          // Filter out the current product from the list of similar products
          const filteredSimilarProducts = data.store.inventory.filter(
            (item) => item.product_id !== product.product_id
          );
          setSimilarProducts(filteredSimilarProducts);
        });
    }
  }, [product]);

  const handleAddToCart = () => {
    // Assume cartAdapter is defined somewhere
    cartAdapter.addToCart(product);
    console.log('Product added to cart:', product);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {product ? (
          <div>
            <div className="max-w-2xl mx-auto bg-white p-8 border rounded-lg shadow-md mt-8">
              <img
                className="w-full object-cover object-center mb-4 rounded-lg"
                src={product.image}
                alt={product.product_name}
              />
              <h2 className="text-3xl font-bold mb-2">{product.product_name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-800 font-bold">₹{product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Similar Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {similarProducts.map((item) => (
                  <Link
                    to={`/product/${item.product_id}`}
                    key={item.product_id}
                    className="hover:no-underline"
                  >
                    <div className="bg-white rounded-md overflow-hidden shadow-md">
                      <img
                        className="w-full h-40 object-cover object-center rounded-t-md"
                        src={item.image}
                        alt={item.product_name}
                      />
                      <div className="p-4">
                        <p className="text-lg font-semibold mb-2">{item.product_name}</p>
                        <p className="text-gray-600 mb-2">₹{item.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center mt-8">Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ShowProduct;
