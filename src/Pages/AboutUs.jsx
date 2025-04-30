import FollowUs from "../Components/FollowUs/FollowUs";
import Footer from "../Components/Footer/Footer";
import NavBarMain from "../Components/NavBarMain/NavBarMain";
import OurTeam from "../Components/OurTeam/OurTeam";


function AboutUs() {

  return (
    <>
      <NavBarMain />
      <p>Сторінка з інформацією про нас</p>
      <OurTeam/>
      
      <Footer />
      <FollowUs />
      </>
  )
};

export default AboutUs;