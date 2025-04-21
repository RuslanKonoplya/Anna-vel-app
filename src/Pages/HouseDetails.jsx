import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import FollowUS from '../Components/FollowUs/FollowUs';
import './HouseDetails.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from '../Components/ImageCarousel.jsx/ImageCaurusel';

function HouseDetails() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://anna-vell-backend-production.up.railway.app/houses/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Помилка при завантаженні');
        return res.json();
      })
      .then((data) => {
        setHouse(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Завантаження...</p>;
  if (!house) return <p>Об'єкт не знайдено</p>;

  return (
    <>
      <NavBar styles={{ background: "linear-gradient(90deg, #4caf50, #e0e0e0)" }} />

      <div className="house">
        <ImageCarousel images={house.images} />

        <div className='house__about'>
          <h1 className='house__title'>{house.title}</h1>
          <p className='house__location'><strong>Локація:</strong> {house.location}</p>
          <p className='house__price'><strong>Ціна:</strong> {house.price.toLocaleString()} $</p>
        </div>

        <p className='house__description'>{house.description}</p>
      </div>

      <Footer />
      <FollowUS />
    </>
  );
}

export default HouseDetails;
