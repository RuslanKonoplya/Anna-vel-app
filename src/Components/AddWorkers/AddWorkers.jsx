import { useState } from 'react';

function AddWorkers() {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img: null,
    role: '',
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
    data.append('role', formData.role);
    data.append('description', formData.description);
    data.append('img', formData.img);
    

    try {
      const response = await fetch('https://anna-vell-backend.onrender.com/api/employees', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Помилка при відправці');
      }

      setSuccessMessage('Працівника додано успішно!');
      setFormData({ name: '',role : '', description: '', img: null ,});
      e.target.reset();
    } catch (error) {
      alert('Помилка при додаванні працівника');
    }
  };

  return (
    <div style={{ margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Додати працівника</h2>
  
    <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '4px' }}>Ім’я</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        </div>
        

        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '4px' }}>Спеціалізація</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
  
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '4px' }}>Опис</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
        />
      </div>
  
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '4px' }}>Фото</label>
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
  
      <button
        type="submit"
        style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Додати
      </button>
    </form>
  
    {successMessage && <p style={{ marginTop: '10px', color: 'green', textAlign: 'center' }}>{successMessage}</p>}
  </div>
  
  );

};


export default AddWorkers;


