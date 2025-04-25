import SectionContactUs from '../SectionContact-us/SectionContact-us';
import './Footer.scss';



function Footer() {
  

  return (
    <footer className='footer'>


      <h1 className='footer__title' id='contacts'>Зв'яжіться з нами</h1>

      
        <div className="footer__contacts">
          <div className="footer__contact-phone">
            <span className="footer__contacts-label">Телефон:</span>
            <br />
            <a
              href="tel:+380634050861"
              className="footer__link"
            >
              +380634050861
            </a>
          </div>

          <div className="footer__contact-email">
          <span className="footer__contacts-label">Email:</span>
          <br />
            
            <a
              href="mailto:annavelieva81@gmail.com"
              className="footer__link"
            >
              annavelieva81@gmail.com
            </a>
          </div>

          <div className="footer__contact-adress" >
              <span className="footer__contacts-label">Адреса:</span>
             
               <address>
            


                 <a
               href="https://www.google.com/maps/search/?api=1&query=бульвар+Незалежності,+39,+Бровари,+Київська+область,+07400"
                target="_blank"
                 rel="noopener noreferrer"
             className="footer__link"
           >
              бульвар Незалежності, 39<br />
              3 поверх, 8 офіс <br />
           Бровари, Київська область<br />
           07400
         </a>
            </address>
        </div>

        </div>


      <SectionContactUs />
      


      
    </footer>
    


  );
};


export default Footer;