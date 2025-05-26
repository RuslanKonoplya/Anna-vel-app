
import './Section3.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';






function Section3() {
  
  const [houses, setHouses] = useState([]);
  const [visibleHouse, setVisibleHouse] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('https://anna-vell-backend.onrender.com/houses')
      .then(res => res.json())
      .then(data => {
        setHouses(data);
        setVisibleHouse(data.slice(0, 3));
      })
      .catch(err => {
        console.error('Помилка при завантаженні будинків:', err);
      });
  }, []);



  

  return (
    <section className='section__houses' id='houses'>


      <p className='section__houses__title'>Наші Об'єкти</p>

      <div className='article__houses'>
      {visibleHouse.map((house) => (
      
        <Link to={`/object/${house._id}`} key={house._id} className="house-card">
          

          
    <img src={house.imageUrl} alt={house.title} className="house-card__image" />
    <div className="house-card__content">
      <h2 className="house-card__title">{house.title}</h2>
      <p className="house-card__location">{house.location}</p>
      <p className="house-card__price">{house.price.toLocaleString()} $</p>
      <p className="house-card__description">
        {house.description.slice(0, 150)}...
      </p>
    </div>
  </Link>
        
      ))}
      </div>
      
      

      
      <Link to={'/objects'} className='link-to-objects'>
       Показати ще
     </Link>
      
       
      
      

    </section>
  );
};

export default Section3;




