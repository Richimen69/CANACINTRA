import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddUs from "./components/Add";
import About from "./views/About";
import Partner from "./views/Partner";
import Home from "./views/Home";
import Events from "./views/Events";
import Information from "./components/Information";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="nosotros" element={<About />} />
        <Route path="actividades" element={<Events />} />
        <Route path="partner" element={<Partner />} />
        <Route path="credencial" element={<Information />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
