import "./App.scss";
import Main from "./Pages/Main";
import HouseDetails from "./Pages/HouseDetails";
import AdminPage from "./Pages/AdminPages/AdminPage";
import LoginPage from "./Pages/AdminPages/LoginPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AllObjects from "./Pages/AllObjects";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import OurServices from "./Pages/OurServices";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
       <Route path="/services" element={<OurServices/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/objects" element={<AllObjects />} />
        <Route path="/" element={<Main />} />
        <Route path="/object/:id" element={<HouseDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

// Прокрутка наверх при переходе на страницу
export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default App;
