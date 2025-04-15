import { useParams } from 'react-router-dom';
import houses from '../Houses/Houses.json';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import FollowUS from '../Components/FollowUs/FollowUs'
import './HouseDetails.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from '../Components/ImageCarousel.jsx/ImageCaurusel';


function HouseDetails() {
  const { id } = useParams();

  
  const house = houses.find((h) => h.id === parseInt(id));

  

  if (!house) return <p>Об'єкт не знайдено</p>;

  return (
    <>
  <NavBar styles={{ background: "linear-gradient(90deg, #4caf50, #e0e0e0)" }} />





      <div className="house">

        
        <ImageCarousel images={ house.images }/>

        


        <div className='house__about'>
        <h1 className='house__title'>{house.title}</h1>
        <p className='house__location'><strong>Локація:</strong> {house.location}</p>
      <p className='house__price' ><strong>Ціна:</strong> {house.price.toLocaleString()} $</p>

        </div>


        <p className='house__description'><strong>Опис:</strong> {house.description}</p>
      
      </div>
      
      <Footer />
      <FollowUS/>

      </>
  );
}

export default HouseDetails;
