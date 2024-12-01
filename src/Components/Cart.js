import React, { useContext } from 'react';
import { cartContext } from './ProductContext';

export default function Cart() {
  const {setCartProduct, cartProduct } = useContext(cartContext);

  const handleRemoveToCart = (product) => {
    setCartProduct(cartProduct.filter(item => item.id !== product.id));
  };

  const formatDescription = (desc) => {
    const maxLength = 100; 
    if (desc.length > maxLength) {
      return desc.slice(0, maxLength) + "..."; 
    }
    return desc;
  };

  return (
    <main>
      {cartProduct.length === 0 ? (
        <div className="text-center p-4 font-bold text-xl">No items available in your cart</div>
      ) : (
        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {cartProduct.map((pro) => (
            <div
              key={pro.id}
              className="border border-gray-300 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src={pro.image}
                alt={pro.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <div className="text-xl font-semibold">{pro.title}</div>
              <div className="text-gray-600 mb-2">
                {formatDescription(pro.description)}
              </div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-lg">Price: ${pro.price}</div>
                <div className="text-red-500 font-medium">
                  Discount: {Math.floor(pro.price / 10)}%
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleRemoveToCart(pro)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 text-sm w-full sm:w-auto mr-2 mb-2"
                  >
                    Remove From Cart
                  </button>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 text-sm w-full sm:w-auto mb-2"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
