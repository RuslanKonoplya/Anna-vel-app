
import './App.scss';
import Main from './Pages/Main';
import HouseDetails from './Pages/HouseDetails';
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'; 

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
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
