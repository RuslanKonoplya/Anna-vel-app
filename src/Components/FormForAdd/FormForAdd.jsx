import React, { useState } from 'react';

function FormForAdd() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('house');
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'anna-vel');
    formData.append('cloud_name', 'dfuyqis8l');

    const res = await fetch('https://api.cloudinary.com/v1_1/dfuyqis8l/image/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const priceNumber = parseFloat(price);

      // Завантаження зображень на Cloudinary
      const mainImageUrl = mainImage ? await uploadToCloudinary(mainImage) : '';
      const imageUrls = await Promise.all(
        Array.from(additionalImages).map(file => uploadToCloudinary(file))
      );

      // Формуємо JSON-об'єкт
      const payload = {
        title,
        price: priceNumber,
        location,
        description,
        type,
        imageUrl: mainImageUrl,
        images: imageUrls,
      };

      const response = await fetch('https://anna-vell-backend-production.up.railway.app/houses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      const data = await response.json();
      console.log('Data submitted:', data);

      // Скидання форми
      setTitle('');
      setPrice('');
      setLocation('');
      setDescription('');
      setType('house');
      setMainImage(null);
      setAdditionalImages([]);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Добавить недвижимость</h2>

      <label>Заголовок</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Цена</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

      <label>Локация</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

      <label>Описание</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Тип недвижимости</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="house">Дом</option>
        <option value="flat">Квартира</option>
        <option value="land">Земля</option>
      </select>

      <label>Главное изображение</label>
      <input type="file" onChange={(e) => setMainImage(e.target.files[0])} accept="image/*" />

      <label>Дополнительные изображения</label>
      <input type="file" multiple onChange={(e) => setAdditionalImages(e.target.files)} accept="image/*" />

      <button type="submit">Отправить</button>
    </form>
  );
}

export default FormForAdd;
