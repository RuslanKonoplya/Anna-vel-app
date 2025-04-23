import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import FollowUS from '../Components/FollowUs/FollowUs';
import './HouseDetails.scss';

import ImageGalery from '../Components/ImageGalery/ImageGalery';

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
  <div className="house__gallery">
    <ImageGalery images={house.images} />
  </div>

  <div className="house__info">
    <h1 className="house__info__title">{house.title}</h1>

    <div className="house__info__card">
      <span className="icon">📍</span>
      <span>{house.location}</span>
    </div>

    <div className="house__info__card">
      <span className="icon">💲</span>
      <span>{house.price.toLocaleString()} $</span>
    </div>

    <div className="house__info__desc">
      {house.description}
    </div>

    
  </div>
</div>


      <Footer />
      <FollowUS />
    </>
  );
}

export default HouseDetails;
