import { Route, Routes } from "react-router-dom";
import AddService from "./Admin/AddService/AddService";
import ManageService from "./Admin/ManageService/ManageService";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Mybooking from "./MyBooking/Mybooking";
import AllServices from "./Services/AllServices/AllServices";
import Service from "./Services/Service/Service";
import ServiceDetails from "./Services/ServiceDetails/ServiceDetails";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Slider from "./Slider/Slider";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/slider" element={<Slider />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/allservices" element={<AllServices />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/service/:_id" element={<ServiceDetails />}></Route>
        <Route path="/addservice" element={<AddService />}></Route>
        <Route path="/manageservice" element={<ManageService />}></Route>
        <Route path="/mybooking" element={<Mybooking />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
