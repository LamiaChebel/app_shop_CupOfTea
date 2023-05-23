import { Routes, Route } from "react-router-dom";

import Header from "./views/MainComponents/Header";
import Footer from "./views/MainComponents/Footer";

import About from "./views/Pages/About/About";
import Admin from "./views/Pages/Admin/Admin";
import Home from "./views/Pages/Home/Home";
import Teas from "./views/Pages/Teas/Teas";
import TeaItem from "./views/Pages/Teas/TeaItem";

import ErrorPage from "./views/Pages/Error/ErrorPage";

// import CrudCategories, CrudImages, CrudPackagings, CrudPacksTeas, CrudTeas  from "./views/Pages/Admin/Components/CRUD";

function App() {
  return (
    <>
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="teas" element={<Teas />} /> {/*<Outlet/> à utiliser */}
      <Route path="teas/:id" element={<TeaItem />} /> {/*<Outlet/> à utiliser */}
      <Route path="about" element={<About />} />
      <Route path="admin" element={<Admin />} /> {/*<Outlet/> à utiliser */}
      {/* <Route path="admin/teas" element={<CrudTeas />} /> 
      <Route path="admin/categories" element={<CrudCategories />} /> 
      <Route path="admin/images" element={<CrudImages />} /> 
      <Route path="admin/packagings" element={<CrudPackagings />} /> 
      <Route path="admin/packsteas" element={<CrudPacksTeas />} />  */}
      <Route path="*" element={<ErrorPage />} />  


      </Routes>

      <Footer />
    </>
  );
}

export default App;
