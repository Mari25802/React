import { createContext } from "react";

export const cartContext=createContext()



// import { createContext, useState } from "react";

// // Create a context for the cart
// export const cartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]); // Initialize cart state as an empty array

//   return (
//     <cartContext.Provider value={{ cart, setCart }}>
//       {children}
//     </cartContext.Provider>
//   );
// };
