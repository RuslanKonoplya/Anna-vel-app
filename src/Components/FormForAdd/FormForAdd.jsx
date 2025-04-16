import React, { useState } from 'react';


function FormForAdd() {
  
  const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState(false); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const priceNumber = parseFloat(price);
  
      const formData = {
        title,
        price: priceNumber,
        location,
        description,
        type: type ? 'house' : 'apartment',
      };
  
      fetch('https://anna-vell-backend-production.up.railway.app/houses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (!response.ok) {
            return response.text().then(text => {
              throw new Error(`Server error: ${text}`);
            });
          }
          return response.json();
        })
        .then(data => {
          console.log('Data submitted:', data);
          setTitle('');
          setPrice('');
          setLocation('');
          setDescription('');
          setType(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Добавить дом</h2>
  
        <div>
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="price">Цена</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="location">Локация</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="description">Описание</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
  
        <div>
    <label>Тип недвижимости:</label>
    <div>
      <label>
        <input
          type="radio"
          name="type"
          value="flat"
          checked={type === 'flat'}
          onChange={(e) => setType(e.target.value)}
        />
        Квартира
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="type"
          value="house"
          checked={type === 'house'}
          onChange={(e) => setType(e.target.value)}
        />
        Дом
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="type"
          value="land"
          checked={type === 'land'}
          onChange={(e) => setType(e.target.value)}
        />
        Земля
      </label>
    </div>
  </div>
  
        <button type="submit">Отправить</button>
      </form>
    );

}


export default FormForAdd;