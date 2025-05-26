import React, { useState } from 'react';




const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  margin: '8px 0'
};

const labelStyle = {
  fontWeight: 'bold',
  marginTop: '16px'
};






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
        'https://anna-vell-backend.onrender.com/houses',
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
    <form 
  onSubmit={handleSubmit} 
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    margin: '40px auto',
    padding: '24px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    boxSizing: 'border-box'
  }}
>
  <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Додати будинок</h2>

  <input 
    type="text" 
    placeholder="Заголовок"
    value={title}
    onChange={e => setTitle(e.target.value)}
    required
    style={inputStyle}
  />
  <input 
    type="number" 
    placeholder="Ціна"
    value={price}
    onChange={e => setPrice(e.target.value)}
    required
    style={inputStyle}
  />
  <input 
    type="text" 
    placeholder="Локація"
    value={location}
    onChange={e => setLocation(e.target.value)}
    required
    style={inputStyle}
  />
  <textarea 
    placeholder="Опис"
    value={description}
    onChange={e => setDescription(e.target.value)}
    required
    style={{ ...inputStyle, height: '120px', resize: 'vertical' }}
  />
  <select 
    value={type}
    onChange={e => setType(e.target.value)}
    style={inputStyle}
  >
    <option value="house">Будинок</option>
    <option value="flat">Квартира</option>
    <option value="land">Земля</option>
  </select>

  <label style={labelStyle}>Головне зображення</label>
  <input 
    type="file" 
    accept="image/*"
    onChange={e => setMainImage(e.target.files[0])}
    required
    style={inputStyle}
  />

  <label style={labelStyle}>Додаткові зображення</label>
  <input 
    type="file" 
    accept="image/*" 
    multiple
    onChange={e => setImages(Array.from(e.target.files))}
    style={inputStyle}
  />

  <button 
    type="submit" 
    style={{
      padding: '12px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      width: '100%' // Кнопка займає всю ширину
    }}
  >
    Відправити
  </button>
</form>

  
  );
}
