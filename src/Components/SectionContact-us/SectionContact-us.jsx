import './SectionContactUs.scss'


function SectionContactUs() {


  return (

    
    <form
    method="post"
      className="footer__contact-us contact-us"
      id='form__contact-us'
    onSubmit="this.reset(); return false;"
  >
    <input
      type="text"
      name="Name"
      placeholder="Як до вас звертатись?"
      className="contact-us__input-name"
    />
   <input
      type="tel"
      name="phone"
      placeholder="Телефон"
       className="contact-us__input-phone"
    />

    <textarea
      name="message"
      className="contact-us__input-message"
      placeholder="Повідомлення"
    ></textarea>

    <button className="contact-us__button">Відправити</button>
    </form>
    


  )
}

export default SectionContactUs;