import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Footer from '../Components/Footer/Footer';
import FollowUS from '../Components/FollowUs/FollowUs';
import './HouseDetails.scss';

import ImageGalery from '../Components/ImageGalery/ImageGalery';
import NavBarMain from '../Components/NavBarMain/NavBarMain';

function HouseDetails() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://anna-vell-backend.onrender.com/houses/${id}`)
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
      <NavBarMain/>

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
