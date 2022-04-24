import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import "./Style.css";
import ServiceDetail from "./Pages/Shared/serviceDetail/ServiceDetail";
import Services from "./Pages/Home/Services/Services";
import Experts from "./Pages/Home/experts/Experts";
import Login from "./Pages/Login/Login";
import Register from "./Pages/register/Register";
import Checkout from "./Pages/checkout/Checkout";
import RequiredAuth from "./Pages/Login/requiredAuth/RequiredAuth";
import AddService from "./Pages/addService/AddService";
import ManageService from "./Pages/manageService/ManageService";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route path="/services" element={<Services />}></Route>
        <Route path="/experts" element={<Experts />}></Route> */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <Checkout />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequiredAuth>
              <AddService />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequiredAuth>
              <ManageService />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
