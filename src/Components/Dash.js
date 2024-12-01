import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
import Cart from "./Cart";
import { cartContext } from './ProductContext';
import "../index.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Dash() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { setCartProduct, cartProduct } = useContext(cartContext);

  const fetchProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const productData = await response.json();
    setProduct(productData);
  };

  const slideImages = [
    {
      url: "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg",
      caption: "Slide 1",
    },
    {
      url: "https://www.pixelo.net/wp-content/uploads/2018/07/Cosmetics-Preview1.jpg",
      caption: "Slide 2",
    },
    {
      url: "https://petapixel.com/assets/uploads/2017/03/product1.jpeg",
      caption: "Slide 3",
    },
  ];

  useEffect(() => {
    fetchProduct();
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddToCart = (product) => {
    setCartProduct((prevCart) => {
      return [...prevCart, product];
    });
    toast.success("Product added to cart successfully!");
  };

  const handleBuyNow = (product) => {
    toast.success(`You are ready to buy: ${product.title}`);
  };

  const formatDescription = (desc) => {
    const maxLength = 100;
    if (desc.length > maxLength) {
      return desc.slice(0, maxLength) + "...";
    }
    return desc;
  };

  const handleGoToCart = () => {
    navigate("/cart");  // Navigate to the /cart page
  };

  return (
    <>
      <ToastContainer />
      <nav className="bg-gray-800 p-4">
        <ul className="flex items-center justify-between">
          <li>
            <img src={logo} alt="Logo" className="h-10 w-50" />
          </li>
          <li className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </li>
          <li>
            <img src={profile} alt="Profile" className="h-8 w-8 rounded-full cursor-pointer" />
          </li>
          <li className="relative">
            {/* Cart Icon with Badge */}
            <img
              src={cart}
              alt="Cart"
              className="h-8 w-8 cursor-pointer" // Cursor pointer applied
              onClick={handleGoToCart} // Navigates to /cart on click
            />
            <div className="absolute top-0 right-0 flex justify-center items-center bg-red-500 text-white rounded-full h-5 w-5 text-xs">
              {cartProduct.length}
            </div>
          </li>
        </ul>
      </nav>

      <header>
        <div className="w-full">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index} className="slide w-full relative flex justify-center items-center">
                <img
                  src={slideImage.url}
                  alt={slideImage.caption}
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="caption absolute bottom-5 left-5 text-white text-xl font-bold shadow-lg">
                  {slideImage.caption}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </header>

      <main>
        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {[...product, ...product].map((pro) => (
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
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleAddToCart(pro)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 text-sm w-full sm:w-auto mr-2 mb-2 cursor-pointer"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(pro)}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 text-sm w-full sm:w-auto mb-2 cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
