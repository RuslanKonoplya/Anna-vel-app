import './SectionContactUs.scss'


import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Отключаем перезагрузку

    try {
      const res = await fetch('https://anna-vell-backend-production.up.railway.app/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Повідомлення надіслано!');
        setFormData({ name: '', phone: '', message: '' }); // Очистка форми
      } else {
        alert('Сталася помилка. Спробуйте ще раз.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Помилка зʼєднання із сервером.');
    }
  };

  return (
    <form
      method="post"
      className="footer__contact-us contact-us"
      id="form__contact-us"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Як до вас звертатись?"
        className="contact-us__input-name"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
        className="contact-us__input-phone"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="contact-us__input-message"
        placeholder="Повідомлення"
      ></textarea>

      <button type="submit" className="contact-us__button">
        Відправити
      </button>
    </form>
  );
}
