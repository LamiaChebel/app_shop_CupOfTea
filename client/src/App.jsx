import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./views/MainComponents/Header";
import Footer from "./views/MainComponents/Footer";

import About from "./views/Pages/About/About";
import Admin from "./views/Pages/Admin/Admin";
import Home from "./views/Pages/Home/Home";
import Teas from "./views/Pages/Teas/Teas";
import TeaItem from "./views/Pages/Teas/TeaItem";

import ErrorPage from "./views/Pages/Error/ErrorPage";

import CrudTeas  from "./views/Pages/Admin/Components/CRUD/CrudTeas";
import CrudCategories  from "./views/Pages/Admin/Components/CRUD/CrudCategories";
import CrudImages  from "./views/Pages/Admin/Components/CRUD/CrudImages";
import CrudPackagings  from "./views/Pages/Admin/Components/CRUD/CrudPackagings";
import CrudPacksTeas  from "./views/Pages/Admin/Components/CRUD/CrudPacksTeas";

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="teas" element={<Teas />} /> 
        <Route path="teas/:id" element={<TeaItem />} /> 
        <Route path="about" element={<About />} />

        <Route path="admin" element={<Admin />} > {/*<Outlet/> à utiliser */}
          <Route path="teas" element={<CrudTeas />} /> 
          <Route path="categories" element={<CrudCategories />} /> 
          <Route path="images" element={<CrudImages />} /> 
          <Route path="packagings" element={<CrudPackagings />} /> 
          <Route path="packsteas" element={<CrudPacksTeas />} /> 
        </Route>
        
        <Route path="*" element={<ErrorPage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
