
import React, { useState, useEffect } from 'react';
import FormForAdd from '../../Components/FormForAdd/FormForAdd';




const styles = {
  adminHouses: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '20px 0',
  },
  adminCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    padding: '16px',
  },
  cardImage: {
    width: '20%',
    height: '15%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  houseCardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  houseCardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
  },
  houseCardLocation: {
    fontSize: '14px',
    color: '#777',
  },
  houseCardPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  houseCardDescription: {
    fontSize: '14px',
    color: '#555',
    height: '60px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    width: '100%',
    marginTop: '12px',
  },
};




function AdminHouses (){

  const [houses, setHouses] = useState([]);
  const [visibleHouse, setVisibleHouse] = useState([]);

  useEffect(() => {
    fetch('https://anna-vell-backend.onrender.com/houses')
      .then(res => res.json())
      .then(data => {
        setHouses(data);
        setVisibleHouse(data);
      })
      .catch(err => {
        console.error('Помилка при завантаженні будинків:', err);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Ви впевнені, що хочете видалити цей будинок?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://anna-vell-backend.onrender.com/houses/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Оновлюємо список після видалення
        const updatedHouses = visibleHouse.filter(house => house._id !== id);
        setHouses(updatedHouses);
        setVisibleHouse(updatedHouses);
      } else {
        console.error('Не вдалося видалити будинок');
      }
    } catch (error) {
      console.error('Помилка при видаленні будинку:', error);
    }
  };

  return (
    <>
      


          
      <div className="admin__houses" style={styles.adminHouses}>
    {visibleHouse.map((house) => (
      <div className="admin__card" key={house._id} style={styles.adminCard}>
        <img
          src={house.imageUrl}
          alt={house.title}
          className="card__image"
          style={styles.cardImage}
        />
        <div className="house-card__content" style={styles.houseCardContent}>
          <h2 className="house-card__title" style={styles.houseCardTitle}>
            {house.title}
          </h2>
          <p className="house-card__location" style={styles.houseCardLocation}>
            {house.location}
          </p>
          <p className="house-card__price" style={styles.houseCardPrice}>
            {house.price.toLocaleString()} $
          </p>
          <p
            className="house-card__description"
            style={styles.houseCardDescription}
          >
            {house.description}
          </p>
          <button
            className="delete-button"
            onClick={() => handleDelete(house._id)}
            style={styles.deleteButton}
          >
            🗑️ Видалити
          </button>
        </div>
      </div>
    ))}
  </div>

    <FormForAdd/>

      </>
    
  )

}

export default AdminHouses;