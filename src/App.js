import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Event from "./Pages/Events/Event";
import Home from "./Pages/Home/Home";
import Teams from "./Pages/Teams/Teams";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/team" element={<Teams />} />
          <Route exact path="/events" element={<Event />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
