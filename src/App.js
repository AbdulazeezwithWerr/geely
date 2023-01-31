
import { Route, Routes } from "react-router-dom";
import Emgrand from "./components/Emgrand/Emgrand";
import Footer from "./components/Footer/Footer";
import GeometryC from "./components/GeometryC/GeometryC";
import GeometryE from "./components/GeometryE/GeometryE";
import Main from "./components/Main/Main";
import Monjaro from "./components/Monjaro/Monjaro";
import Navbar from "./components/Navbar/Navbar";
import Okavango from "./components/Okavango/Okavango";
import About from "./components/pages/About";
import CoolrayPage from "./components/pages/CoolrayPage";
import ScrollToTop from "./components/ScrollToTop";
import TestDrive2 from "./components/TestDrivee2/TestDrive";
import Tugella from "./components/Tugella/Tugella";


function App() {
  return (
   <>
   <ScrollToTop />
   <Navbar />
   <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/about" element={<About />} />
     <Route path="/coolray" element={<CoolrayPage />} />
     <Route path="/emgrand" element={<Emgrand />} />
     <Route path="/monjaro" element={<Monjaro />} />
     <Route path="/geometryC" element={<GeometryC />} />
     <Route path="/geometryE" element={<GeometryE />} />
     <Route path="/tugella" element={<Tugella />} />
     <Route path="/okavango" element={<Okavango />} />

     <Route path="/testdrive" element={<TestDrive2 />} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
