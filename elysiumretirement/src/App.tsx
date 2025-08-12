import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Contact from "./Components/ContactusPage";
import ComingSoon from "./Components/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar should be outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/blog" element={<ComingSoon />} />
        ComingSoon
        {/* <Route path="/login" element={<ContactUs formType="" />} />
        <Route path="/signUp" element={<Login formType="signup" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      </Routes>
      <Footer /> {/* Footer should be outside Routes */}
    </BrowserRouter>
  );
}

export default App;
