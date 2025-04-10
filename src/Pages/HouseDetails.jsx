import { useParams } from 'react-router-dom';
import houses from '../Houses/Houses.json';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import './HouseDetails.scss'

function HouseDetails() {
  const { id } = useParams();
  const house = houses.find((h) => h.id === parseInt(id));

  if (!house) return <p>Об'єкт не знайдено</p>;

  return (
    <>
      <NavBar styles={{ backgroundColor: 'gray' }} />


      <div className="house">
      <h1 className='house__title'>{house.title}</h1>
      <img src={house.imageUrl} alt={house.title}  className='house__img'/>
      <p className='house__location'><strong>Локація:</strong> {house.location}</p>
      <p className='house__price' ><strong>Ціна:</strong> {house.price.toLocaleString()} $</p>
      <p className='house_description'><strong>Опис:</strong> {house.description}</p>
      </div>
      
    <Footer/>

      </>
  );
}

export default HouseDetails;
