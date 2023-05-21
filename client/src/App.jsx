import { Routes, Route } from "react-router-dom";

import Header from "./views/MainComponents/Header";
import Footer from "./views/MainComponents/Footer";

import About from "./views/Pages/About/About";

function App() {
  return (
    <>
      <Header />

      <Routes>
      {/* <Route path={"/"} element={<Home />} /> */}
      {/* <Route path={"/teas"} element={<Teas />} /> */}
      <Route path={"/about"} element={<About />} />
      {/* <Route path={"/admin"} element={<Admin />} />  */}

      </Routes>

      <Footer />
    </>
  );
}

export default App;
