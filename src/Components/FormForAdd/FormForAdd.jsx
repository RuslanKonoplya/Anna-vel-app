import React, { useState } from 'react';

function FormForAdd() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('house');
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  // Загружает файл на Cloudinary и возвращает URL
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'anna-vel');      // Ваш upload preset
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dfuyqis8l/image/upload',
      { method: 'POST', body: formData }
    );
    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1) Загружаем главное изображение
      const mainImageUrl = mainImage
        ? await uploadToCloudinary(mainImage)
        : '';

      // 2) Загружаем дополнительные
      const imageUrls = await Promise.all(
        Array.from(additionalImages).map((f) => uploadToCloudinary(f))
      );

      // 3) Формируем JSON-пэйлоад
      const payload = {
        title,
        price: parseFloat(price),
        location,
        description,
        type,
        imageUrl: mainImageUrl,
        images: imageUrls,
      };
      console.log('➡️ Sending:', payload);

      // 4) Отправляем на бэкенд
      const res = await fetch(
        'https://anna-vell-backend-production.up.railway.app/houses',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const result = await res.json();
      console.log('✅ Created:', result);
      alert('Дом успешно добавлен!');
      // сброс формы
      setTitle('');
      setPrice('');
      setLocation('');
      setDescription('');
      setType('house');
      setMainImage(null);
      setAdditionalImages([]);
    } catch (err) {
      console.error('❌ Error:', err);
      alert('Ошибка при добавлении дома');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h2>Добавить дом</h2>

      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Локация"
        value={location}
        onChange={e => setLocation(e.target.value)}
        required
      />

      <textarea
        placeholder="Описание"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />

      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="house">Дом</option>
        <option value="flat">Квартира</option>
        <option value="land">Земля</option>
      </select>

      <label>Главное изображение:</label>
      <input
        type="file"
        accept="image/*"
        onChange={e => setMainImage(e.target.files[0])}
      />

      <label>Дополнительные изображения:</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={e => setAdditionalImages(e.target.files)}
      />

      <button type="submit">Отправить</button>
    </form>
  );
}

export default FormForAdd;
