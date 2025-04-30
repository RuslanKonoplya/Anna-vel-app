
import { useState, useEffect } from 'react';
import AddWorkers from '../../Components/AddWorkers/AddWorkers';

function AdminWorkers() {
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

  // Функція для видалення працівника
  const deleteEmployee = async (id) => {
    if (window.confirm("Ви впевнені, що хочете видалити цього працівника?")) {
      try {
        const response = await fetch(`https://anna-vell-backend-production.up.railway.app/api/employees/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Помилка при видаленні працівника');
        }

        // Оновлюємо список працівників після видалення
        setPersons((prevPersons) => prevPersons.filter((person) => person._id !== id));
        alert('Працівника видалено!');
      } catch (err) {
        alert(err.message);
      }
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
    <>
      <div className="comand" style={{ display: 'flex', flexDirection: 'column', gap: '50px' ,paddingTop: '40px' }}>
  {persons.map((person, index) => (
    <div
      className="person"
      key={index}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        borderBottom: '1px solid #ddd',
        flexWrap: 'wrap',
      }}
    >
      <img
        src={person.img}
        alt="Фото Працівника"
        className="person__img"
        style={{
          height: '15%',
          width: '15%',
          borderRadius: '40%',
          objectFit: 'cover',
          flexShrink: 0,
          aspectRatio: '1 / 1'
        }}
      />
      <div style={{ flex: 1, minWidth: '150px' }}>
        <p className="person__name" style={{ fontWeight: 'bold', margin: '0' }}>{person.name}</p>
        <p
          className="name__description"
          style={{
            margin: '0',
            color: '#555',
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
          }}
        >
          {person.description}
        </p>
      </div>
      <button
        onClick={() => deleteEmployee(person._id)}
        style={{
          marginLeft: 'auto',
          padding: '8px 16px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          height: 'fit-content',
        }}
      >
        Видалити
      </button>
    </div>
  ))}
</div>


      <AddWorkers />
    </>
  );
}

export default AdminWorkers;

