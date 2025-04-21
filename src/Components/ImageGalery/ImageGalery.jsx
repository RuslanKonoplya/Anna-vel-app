import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function ImageGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  return (
    <div style={{ width: '100%' }} className='slider'>
      {/* Головне зображення */}
      {images[0] && (
        <img
          src={images[0]}
          alt="Main"
          style={{
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            borderRadius: '12px',
            cursor: 'pointer',
            marginBottom: '12px',
          }}
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
        />
      )}

      {/* Горизонтальна стрічка мініатюр */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '10px',
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumb ${i}`}
            style={{
              flex: '0 0 auto',
              width: '20%',
              height: '80px',
              objectFit: 'cover',
              borderRadius: '6px',
              cursor: 'pointer',
              border: index === i ? '2px solid #007bff' : '2px solid transparent',
              transition: 'border 0.3s ease',
            }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {/* Лайтбокс */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </div>
  );
}
