
import './OurTeam.scss';

import { useState, useEffect } from 'react';

function OurTeam() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Функція для отримання працівників
  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://anna-vell-backend-production.up.railway.app/api/employees');
      if (!response.ok) {
        throw new Error('Помилка при отриманні даних');
      }
      const data = await response.json();
      setPersons(data); // Оновлюємо стейт
    } catch (err) {
      setError(err.message); // Встановлюємо повідомлення про помилку
    } finally {
      setLoading(false); // Встановлюємо завантаження в false
    }
  };

  // Викликаємо fetchEmployees при завантаженні компоненти
  useEffect(() => {
    fetchEmployees();
  }, []); // Пустий масив залежностей означає, що запит буде виконано тільки один раз

  // Виведення під час завантаження
  if (loading) {
    return <div>Завантаження...</div>;
  }

  // Виведення помилки
  if (error) {
    return <div>Помилка: {error}</div>;
  }

  return (
    <section className='ourteam'>
      <h1 className='ourteam__title'>Наша Команда</h1>

      <div className='workers'>
        {persons.map((person, index) => (
          <div className='worker' key={index}>
            <img src={person.img} alt="Фото Працівника" className='worker__img' />
            <p className='worker__name'>{person.name}</p>
            <p className='worker__description'>{person.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
