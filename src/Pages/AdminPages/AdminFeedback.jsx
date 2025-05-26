

import { useState, useEffect } from 'react';

export default function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Функція для отримання відгуків
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('https://anna-vell-backend.onrender.com/api/feedback');
        if (response.ok) {
          const data = await response.json();
          setFeedbacks(data); // зберігаємо відгуки в стейт
        } else {
          console.error('Помилка при отриманні даних');
        }
      } catch (error) {
        console.error('Помилка підключення до API:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  // Функція для видалення відгуку
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Ви впевнені, що хочете видалити цей відгук?');
    if (confirmDelete) {
      try {
        const response = await fetch(`https://anna-vell-backend.onrender.com/api/feedback/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setFeedbacks(feedbacks.filter(feedback => feedback._id !== id)); // Видаляємо відгук з стейту
          alert('Відгук успішно видалений');
        } else {
          console.error('Помилка при видаленні відгуку');
        }
      } catch (error) {
        console.error('Помилка під час видалення відгуку:', error);
      }
    }
  };

  return (
    <div>
      <h2>Відгуки</h2>
      {feedbacks.length === 0 ? (
        <p>Немає відгуків</p>
      ) : (
        <div className="feedback-cards">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="feedback-card" style={{ backgroundColor: 'orange' }}>
              <h3>{feedback.name}</h3>
              <p className="feedback-phone">{feedback.phone}</p>
              <p className="feedback-message">{feedback.message}</p>
              <button onClick={() => handleDelete(feedback._id)} className="delete-button">
                Видалити
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


