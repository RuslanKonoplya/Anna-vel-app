import './FollowUs.scss';



function FollowUs() {
  return (

    <div className='follow-us'>


    


      <h1 className='follow-us__title'>Слідкуйте за нами, в соціальних мережах</h1>


      <div className='follow-us__links'>

        <a href="https://www.instagram.com/anna_velrieltestate/"
        target="_blank" 
        rel="noopener noreferrer">
          <img src="/Images/1696894_apps_instagram_media_social_icon.png" alt="instagram" className='follow-us__img'
          target="_blank" 
          rel="noopener noreferrer"/>
        </a>



        <a href="https://www.facebook.com/groups/999093171971721/?ref=share"
        target="_blank" 
          rel="noopener noreferrer"
        
        >
          


          <img src="/Images/1696905_apps_facebook_media_social_icon.png" alt="facebook" className='follow-us__img'/>
        </a>



        <a href="#" target="_blank" 
          rel="noopener noreferrer">
          <img src="/Images/vecteezy_tiktok-png-icon_16716450.png" alt="tik-tok" className='follow-us__img'
          target="_blank" 
          rel="noopener noreferrer"/>
      </a>

      </div>

    </div>
    
  );

};



export default FollowUs;