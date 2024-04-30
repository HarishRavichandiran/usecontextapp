import React, { useState } from "react";
import CartCard from "./components/CartCard";

export const UserContext = React.createContext();

function App() {
  const [product, setProduct] = useState([
    {
      "id": 1,
            "title": "iPhone 11",
            "description": "Decent and perfect for those people whos looking for a good device with advanced features",
            "price": 400,
            "discountPercentage": 11.96,
            "rating": 6.69,
            "stock": 40,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
           
    }, 
    {
      "id": 2,
            "title": "iPhone 15pro max",
            "description": "Massive phone for the massive users ",
            "price": 588,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            
            
    },

    {
      "id": 3,
            "title": "One Plus 9R",
            "description": "Very superficial device not like that just a normal with a good config",
            "price": 500,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Oneplus",
            "category": "smartphones",
            
    },
    {
      "id": 4,
            "title": "Nokia Lumia ",
            "description": "The Nokia Lumia series was a line of smartphones known for their colorful design, integration with Microsoft services, and user-friendly Windows Phone operating system.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "Nokia",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
           
    },
    
    {
      "id": 5,
            "title": "Mac book pro",
            "description": "The MacBook Pro is Apple's line of premium laptop computers, known for their sleek design, powerful performance, and high-resolution Retina displays.",
            "price": 800,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Apple",
            "category": "Laptops",
            
        }
  ]);

  return (
    <>
      <UserContext.Provider value={{ product, setProduct }}>
        <div className="container my-5">
          <CartCard />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;