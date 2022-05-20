import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
