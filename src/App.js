import { Route, Routes, useLocation } from "react-router-dom";
import AddService from "./Admin/AddService/AddService";
import ManageService from "./Admin/ManageService/ManageService";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Mybooking from "./MyBooking/Mybooking";
import AllServices from "./Services/AllServices/AllServices";
import ServiceDetails from "./Services/ServiceDetails/ServiceDetails";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import RouteProgress from "./Shared/RouteProgress/RouteProgress";
import Slider from "./Slider/Slider";
import { AuthProvider } from "./hooks/useAuth";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <div>
      <RouteProgress />
      <Header />

      {/* Keyed by path so every navigation (including a RequireAuth redirect to
          /login) fades in instead of cutting straight to the next page. */}
      <main key={location.pathname} className="animate-fade-in">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/slider" element={<Slider />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/allservices" element={<AllServices />}></Route>
          <Route path="/service/:_id" element={<ServiceDetails />}></Route>
          <Route
            path="/addservice"
            element={
              <RequireAuth>
                <AddService />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/manageservice"
            element={
              <RequireAuth>
                <ManageService />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/mybooking"
            element={
              <RequireAuth>
                <Mybooking />
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
