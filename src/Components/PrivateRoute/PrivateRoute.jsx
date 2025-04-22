import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem('token'); // Отримуємо токен з localStorage

      if (!token) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('https://anna-vell-backend-production.up.railway.app/api/check-auth', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok && data.isAdmin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        setIsAdmin(false);
        setError('Виникла помилка при перевірці доступу');
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) {
    return <p>Перевірка доступу...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return isAdmin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
