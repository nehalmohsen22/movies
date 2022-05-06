import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllRoutes from "./config/Routes";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
