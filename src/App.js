import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { Candy } from "./pages/candy/candy";
import { Navigation } from "./layouts/Navigation";
import { Drink } from "./pages/produits/components/drink";
import { Chocolat } from "./pages/contact/chocolat";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Candy />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/chocolat" element={<Chocolat />} />
      </Routes>
    </>
  );
};
