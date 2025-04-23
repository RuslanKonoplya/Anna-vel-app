
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';




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



  

  const styles = {
    catalogSection: {
      padding: '40px 16px',
      backgroundColor: '#f5f7fb',
    },
    catalogTitle: {
      fontSize: '28px',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '32px',
      color: '#1f1f1f',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      background: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease-in-out',
      color: '#000',
    },
    cardImg: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    cardInfo: {
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    cardHeading: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#222',
      margin: 0,
    },
    cardText: {
      fontSize: '14px',
      color: '#666',
      margin: 0,
    },
    cardPrice: {
      fontSize: '15px',
      fontWeight: '700',
      color: '#2e8b57',
      marginTop: '4px',
    },
  };
  

  return (
    <>
      
      <NavBar />
      


      
    <section style={styles.catalogSection}>
  <h2 style={styles.catalogTitle}>Наші Об'єкти</h2>

  <div style={styles.cardGrid}>
    {houses.map((house) => (
      <Link to={`/object/${house._id}`} key={house._id} style={styles.card} className="property-card">
        <img src={house.imageUrl} alt={house.title} style={styles.cardImg} />
        <div style={styles.cardInfo}>
          <h3 style={styles.cardHeading}>{house.title}</h3>
          <p style={styles.cardText}>📍 {house.location}</p>
          <p style={styles.cardPrice}>💲 {house.price.toLocaleString()} $</p>
        </div>
      </Link>
    ))}
  </div>
</section>



     <Footer/>
      
      </>
  );
};


export default AllObjects;