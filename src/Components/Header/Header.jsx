import NavBar from '../NavBar/NavBar';
import './Header.scss';
import { useState, useEffect } from 'react';

const images = [
  '/Images/Header_images/pexels-heyho-5998120.jpg',
  '/Images/Header_images/pexels-heyho-6283972.jpg',
  '/Images/Header_images/pexels-heyho-6758773.jpg',
  '/Images/Header_images/pexels-heyho-6908367.jpg',
];

const preloadImages = (imageArray) => {
  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};


export function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImage, setLoadedImage] = useState(images[0]);

  useEffect(() => {
    preloadImages(images); // Предзагрузка всех изображений
  }, []);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const preloadImage = new Image();
    preloadImage.src = images[nextIndex];

    preloadImage.onload = () => {
      setTimeout(() => {
        setLoadedImage(images[nextIndex]);
        setCurrentIndex(nextIndex);
      }, 8000);
    };

    return () => clearTimeout();
  }, [currentIndex]);
  
  return (



    
    <header className="header"
    style={{
      backgroundImage: `url(${loadedImage})`,
      transition: 'background-image 0.5s ease-in-out',
    }}
    >
      

      
      <NavBar/>
      
      <h1 className="header__title">Агенція з нерухомості  ANNA VEL</h1>
      <div className="header__sheudule">
         <span className="header__sheudule__span">Години Роботи</span> <br />
        Пн-Пт 09:00 - 18:00 Cб-Нд Вихідні
      </div>
    </header>
  );
};