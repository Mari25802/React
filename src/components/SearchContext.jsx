// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // To detect route changes

import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [search, setSearch] = useState('');
//   const location = useLocation(); // Get current location from react-router-dom
//     console.log("lo",location)
//   // Reset search term when route changes
//   useEffect(() => {
//     setSearch(''); // Reset search when the route changes
//   }, [location]);

//   return (
//     <SearchContext.Provider value={{ search, setSearch }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearch = () => useContext(SearchContext);

 export const SearchContext=createContext()

 export const SearchProvider=({children})=>{
    const[search,setSearch]=useState('')
    const location =useLocation();

    useEffect(()=>{
        setSearch('')
    },[location])

    return(
        <SearchContext.Provider value={{search,setSearch}}>
            {children}
        </SearchContext.Provider>
    );
 };

 export const useSearch=()=>useContext(SearchContext);