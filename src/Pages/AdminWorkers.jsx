

import { useState } from 'react';

function AdminWorkers() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img: null,
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'img') {
      setFormData({ ...formData, img: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('img', formData.img);

    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Помилка при відправці');
      }

      setSuccessMessage('Працівника додано успішно!');
      setFormData({ name: '', description: '', img: null });
      e.target.reset();
    } catch (error) {
      alert('Помилка при додаванні працівника');
    }
  };

  return (
    <div>
      <h2>Додати працівника</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Ім’я</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Опис</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Фото</label>
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Додати</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default AdminWorkers;
