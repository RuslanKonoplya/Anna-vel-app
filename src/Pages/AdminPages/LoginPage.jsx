import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://anna-vell-backend.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });

      const data = await res.json();

      if (res.ok && data.success && data.token) {
        // Зберігаємо токен у localStorage
        localStorage.setItem('token', data.token);
        navigate('/admin'); // Перехід на захищену сторінку
      } else {
        setError(data.message || 'Невірний логін або пароль');
      }
    } catch (err) {
      setError('Сталася помилка при авторизації');
    }
  };

  return (
    <div>
      <h2>Логін</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логін"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
        />
        <button type="submit">Увійти</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
