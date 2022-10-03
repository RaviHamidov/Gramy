// Import Jsx Components
import React, { useEffect } from "react";
import { Routes, Navigate, Route, json } from "react-router-dom";
import Page404 from "./Pages/404";
import DiscoverPage from "./Pages/DiscoverPage";  
import axios from "axios";
import RestaurantsPage from "./Pages/RestaurantsPage";
import SpecialRestaurant from "./Pages/SpecialRestaurant";
import StoresPage from "./Pages/StoresPage";
function App() {
  useEffect(()=>{
   fetchAll()
  },[])
  async function fetchAll(){
    const data= await fetch("http://localhost:5000/product/all");
    const json=await data.json();
    console.log(json)
  }
  return (
    <>
    
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/discover" replace />}
        />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/res" element={<SpecialRestaurant />} />
        <Route path="stores" element={<StoresPage />} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </>
  );
}
export default App;