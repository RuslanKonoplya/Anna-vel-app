import OurTeam from '../OurTeam/OurTeam';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import SectionContactUs from '../SectionContact-us/SectionContact-us';
import './MainContent.scss';




export function MainContent() {

  return (
    <main className="main">

      <Section1/>
      
      <Section2/>

      <Section3 />
      

      <OurTeam/>

    </main>
    
    
  );

};