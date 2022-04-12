import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import "./Style.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
