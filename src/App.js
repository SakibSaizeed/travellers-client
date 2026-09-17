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
import useAuth, { AuthProvider } from "./hooks/useAuth";

// Paths RequireAuth will bounce to /login when signed out — kept in sync with the
// RequireAuth-wrapped routes below.
const PROTECTED_PATHS = ["/addservice", "/manageservice", "/mybooking"];

const AppRoutes = () => {
  const location = useLocation();
  const { user } = useAuth();

  // If this render is signed-out on a protected path, RequireAuth is about to redirect
  // to /login on this same navigation. Treat the destination as /login for animation
  // purposes now, instead of waiting for that redirect to land — otherwise `<main>`
  // remounts (and replays its fade-in) once for the protected page and again a moment
  // later for /login, which reads as a blink instead of one smooth transition.
  const redirectingToLogin = !user && PROTECTED_PATHS.includes(location.pathname);
  const animationKey = redirectingToLogin ? "/login" : location.pathname;

  return (
    <div>
      <RouteProgress pathname={animationKey} />
      <Header />

      {/* Keyed by the *effective* path so every real navigation fades in once,
          including a RequireAuth redirect to /login. */}
      <main key={animationKey} className="animate-fade-in">
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
