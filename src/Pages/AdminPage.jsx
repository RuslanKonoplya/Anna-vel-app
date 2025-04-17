import React, { useState, useEffect } from 'react';
import FormForAdd from '../Components/FormForAdd/FormForAdd';
import './AdminPage.scss'

function AdminPage() {


  const [houses, setHouses] = useState([]);
  const [visibleHouse, setVisibleHouse] = useState([]);

  useEffect(() => {
    fetch('https://anna-vell-backend-production.up.railway.app/houses')
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
      const response = await fetch(`https://anna-vell-backend-production.up.railway.app/houses/${id}`, {
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
      


          
      <div className='admin__houses'>

           
        {visibleHouse.map((house) => (
           
           <div className="admin__card" key={house._id}>


           <img src={house.imageUrl} alt={house.title} className="card__image" />
                        
           
           <div className="house-card__content">
           <h2 className="house-card__title">{house.title}</h2>
           <p className="house-card__location">{house.location}</p>
           <p className="house-card__price">{house.price.toLocaleString()} $</p>
           <p className="house-card__description">
            {house.description}
              </p>
              
              
              <button className="delete-button" onClick={() => handleDelete(house._id)}>
                🗑️ Видалити
              </button>
            </div >
               
            </div>

  
    
        


    
  ))}
    

  </div>
      

    <FormForAdd/>

      </>
    
  )
  
  
}

export default AdminPage;



