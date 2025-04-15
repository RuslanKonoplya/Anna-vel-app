import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  

  return (
    <div style={{ width: '100%'}} className="house__carousel">


      

   <Slider {...settings}>

      {images.map((src, index) => (

     <div>
          <img src={src} alt={`slide ${index}`}
            className="house__img" />
     </div>

     ))}
    </Slider>
        
     
    </div>
  );
};

export default ImageCarousel;
