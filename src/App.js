import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import CallButtonWrapper from "./components/call/CallButtonWrapper ";
import Loader from "./components/Loader/Loader";
import initialState from "./InitialState";

const AnimateRoutes = lazy(() => import("./components/AnimateRoutes"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? <Loader /> : (
        <CallButtonWrapper>
          <Navbar />
          <ScrollToTop />
          <Suspense fallback={<div>Loading...</div>}>
            <AnimateRoutes initialState={initialState} />
          </Suspense>
        </CallButtonWrapper>
      )}
    </BrowserRouter>
  );
}

export default App;