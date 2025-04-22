
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';



function AllObjects() {
  
  const [houses, setHouses] = useState([]);
  const [visibleHouse, setVisibleHouse] = useState([]);
  

  useEffect(() => {
    fetch('https://anna-vell-backend-production.up.railway.app/houses')
      .then(res => res.json())
      .then(data => {
        setHouses(data);
        
      })
      .catch(err => {
        console.error('Помилка при завантаженні будинків:', err);
      });
  }, []);



  

  return (
      <>
    <NavBar styles={{ background: "linear-gradient(90deg, #4caf50, #e0e0e0)" }} />
    <section className='section__houses'>


      <p className='section__houses__title'>Наші Об'єкти</p>

      <div className='article__houses'>
      {houses.map((house) => (
      
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
      
      

     
      
      

      </section>
      
      </>
  );
};


export default AllObjects;