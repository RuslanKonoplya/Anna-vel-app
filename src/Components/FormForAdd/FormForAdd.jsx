import React, { useState } from 'react';

const FormForAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    description: '',
    type: '',
    mainImage: null,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'mainImage') {
      setFormData((prevData) => ({
        ...prevData,
        mainImage: files[0], // головне зображення
      }));
    } else if (name === 'images') {
      setFormData((prevData) => ({
        ...prevData,
        images: Array.from(files), // додаткові зображення
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Створення FormData для відправки на сервер
    const data = new FormData();
    
    // Додавання текстових полів
    data.append('title', formData.title);
    data.append('price', formData.price);
    data.append('location', formData.location);
    data.append('description', formData.description);
    data.append('type', formData.type);

    // Додавання головного зображення
    if (formData.mainImage) {
      data.append('mainImage', formData.mainImage);
    }

    // Додавання додаткових зображень
    if (formData.images.length > 0) {
      formData.images.forEach((file) => data.append('images', file));
    }

    try {
      const response = await fetch('https://anna-vell-backend-production.up.railway.app/houses', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Помилка при відправці даних');
      }

      const result = await response.json();
      console.log('Будинок додано:', result);
      alert('Будинок додано успішно!');
    } catch (err) {
      console.error('Помилка при відправці даних:', err);
      alert('Помилка при додаванні будинку');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Назва"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Ціна"
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Місцезнаходження"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Опис"
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Тип"
      />

      {/* Завантаження головного зображення */}
      <input
        type="file"
        name="mainImage"
        onChange={handleFileChange}
        accept="image/*"
      />

      {/* Завантаження додаткових зображень */}
      <input
        type="file"
        name="images"
        onChange={handleFileChange}
        accept="image/*"
        multiple
      />

      <button type="submit">Додати будинок</button>
    </form>
  );
};

export default FormForAdd;
