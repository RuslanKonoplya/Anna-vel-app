
import './OurTeam.scss';




function OurTeam() {





  const persons = [
    {
      img: "/Images/photo_5458817650290454213_y.jpg",
      description: 'Руслан молодець алоплпроолропролдроплролропропрарпро Руслан молодець алоплпроолропролдроплролропропрарпроРуслан молодець алоплпроолропролдроплролропропрарпро',
      
    },
    {
      img: "/Images/photo_5458817650290454213_y.jpg",
      description: 'Руслан молодець алоплпроолропролдроплролропропрарпро Руслан молодець алоплпроолропролдроплролропропрарпроРуслан молодець алоплпроолропролдроплролропропрарпро',
      
    },
    {
      img: "/Images/photo_5458817650290454213_y.jpg",
      description: 'Руслан молодець алоплпроолропролдроплролропропрарпро Руслан молодець алоплпроолропролдроплролропропрарпроРуслан молодець алоплпроолропролдроплролропропрарпро',
      
    },
    {
      img: "/Images/photo_5458817650290454213_y.jpg",
      description: 'Руслан молодець алоплпроолропролдроплролропропрарпро Руслан молодець алоплпроолропролдроплролропропрарпроРуслан молодець алоплпроолропролдроплролропропрарпро',
      
    },
  ];


  return (

    <section className='ourteam'>

      <h1 className='ourteam__title'>Наша Команда</h1>


      
      <div className='workers'>

        
      {persons.map((person, index) => (
      
      <div className='worker' key={index}>

        <img src={person.img} alt="Фото Працівника"  className='worker__img'/>
        
        <p className='worker__description'>{ person.description}</p>


      </div>
      
  ))}


      </div>

      

    </section>

    
    
  );

}



export default OurTeam;