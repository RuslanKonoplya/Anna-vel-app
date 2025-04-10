
import './App.scss';
import Main from './Pages/Main';
import { useEffect } from 'react';
import HouseDetails from './Pages/HouseDetails';
import AdminPage from './Pages/AdminPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function App() {



  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
  
        <Route path="/object/:id" element={<HouseDetails/>} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}






export const ScrollToTop = () => {
  const location = useLocation(); // Получаем текущий маршрут

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу вверх
  }, [location]); // Следим за изменениями маршрута

  return null;
};



export default App;
