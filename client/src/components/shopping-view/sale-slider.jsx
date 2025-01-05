// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import axios from "axios";

// const ProductCarousel = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProducts = async () => {
//     try {  
//       const response = await axios.get("http://localhost:5000/api/products?limit=12"); // Backend URL
//       setProducts(response.data.products || []); // Assuming the API returns products in 'data.products'
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setError("Failed to load products. Please try again.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>{error}</div>
//       ) : (
//         <Slider {...settings}>
//           {products.map((product) => (
//             <div key={product._id}>
//               <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
//                   <p className="text-sm text-gray-500">{product.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       )}
//     </div>
//   );
// };

// export default ProductCarousel;
import React from "react";
import Slider from "react-slick";
import  ShoppingProductTile  from "./product-tile";
const ProductCarousel = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$49.99",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$69.99",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$89.99",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$99.99",
      imageUrl: "https://via.placeholder.com/200",
    },
    // Add more products as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
                <button className="mt-2 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;   