
import './Sortbuttons.scss'


function SortButtons({ sort }) {
  


  




  return (
    
    <div className="sort-buttons">
      <button className="sort-button"
        onClick={() => {
        sort('house')
      }}
      
      >Будинки</button>




      <button className="sort-button"
        
        onClick={() => {
          sort('flat')
        }}
      
      >Квартири</button>





      <button className="sort-button"
      onClick={() => {
        sort('land')
      }}
      >Ділянки</button>
      </div>

  )
};


export default SortButtons;

