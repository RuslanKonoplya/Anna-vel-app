import React, { useState } from 'react';

export default function FormForAdd() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('house');
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', title);
    data.append('price', price);
    data.append('location', location);
    data.append('description', description);
    data.append('type', type);
    if (mainImage) data.append('mainImage', mainImage);
    images.forEach((file) => data.append('images', file));

    console.log('▶️ Sending FormData:', {
      title, price, location, description, type,
      mainImage, images
    });

    try {
      const res = await fetch(
        'https://anna-vell-backend-production.up.railway.app/houses',
        { method: 'POST', body: data }
      );
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      console.log('✅ Created:', json);
      alert('Будинок успішно додано!');
      // Скидаємо
      setTitle(''); setPrice(''); setLocation('');
      setDescription(''); setType('house');
      setMainImage(null); setImages([]);
    } catch (err) {
      console.error('❌ Ошибка при отправке:', err);
      alert('Помилка при додаванні будинку');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:8 }}>
      <h2>Додати будинок</h2>
      <input type="text"     
      placeholder="Заголовок"   value={title}       onChange={e=>setTitle(e.target.value)}       required />
      <input type="number"   
      placeholder="Ціна"        value={price}       onChange={e=>setPrice(e.target.value)}       required />
      <input type="text"     
      placeholder="Локація"     value={location}    onChange={e=>setLocation(e.target.value)}   required />
      <textarea placeholder="Опис"           value={description} onChange={e=>setDescription(e.target.value)} required />
      <select value={type} onChange={e=>setType(e.target.value)}>
        <option value="house">Будинок</option>
        <option value="flat">Квартира</option>
        <option value="land">Земля</option>
      </select>

      <label>Головне зображення</label>
      <input type="file" accept="image/*"
        onChange={e=>setMainImage(e.target.files[0])}
        required
      />

      <label>Додаткові зображення</label>
      <input type="file" accept="image/*" multiple
        onChange={e=>setImages(Array.from(e.target.files))}
      />

      <button type="submit">Відправити</button>
    </form>
  );
}
