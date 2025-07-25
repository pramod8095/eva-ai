import { Route, Routes } from "react-router";
import Details from "./components/Details";
import Eva from "./components/Eva";
import Results from "./components/Results";
import Notfound from "./components/Notfound";

import React, { Suspense, useEffect } from "react";

function App() {

  // Disable right click
  useEffect(() => {
    const handleContextmenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextmenu);
    return () => document.removeEventListener("contextmenu", handleContextmenu);
  }, []);

  // Vanta.js background
 

  return (
  
      <div >
        <Suspense fallback=".....">
        <Routes>
          <Route index path="/" element={<Details />} />
          <Route path="/eva" element={<Eva />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        </Suspense>
      </div>
   
  );
}

export default App;
