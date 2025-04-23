import React, { useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ImageGallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = images.map((src) => ({ src }));

  const handleImageClick = useCallback((i) => {
    setIndex(i);
    setOpen(true);
  }, []);

  return (
    <div style={styles.slider} className="slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Thumb ${i}`}
          style={{
            ...styles.thumb,
            border: index === i ? '2px solid #007bff' : '2px solid transparent',
          }}
          onClick={() => handleImageClick(i)}
        />
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </div>
  );
};

const styles = {
  slider: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    overflowY: 'auto',
  },
  thumb: {
    flex: '0 0 calc(33.333% - 10px)', // три миниатюры в ряд
    height: '120px',                   // чуть меньше, чем было
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, border 0.2s ease',
    opacity: 0.85,
  },
};

export default ImageGallery;
