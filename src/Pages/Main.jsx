import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Components/Header/Header';
import './Main.scss'
import { MainContent } from '../Components/MainContent/MainContent';
import Footer from '../Components/Footer/Footer';



function Main() {
  
  return (
    <>
      
      <Header />
      <MainContent />
      <Footer/>

      <div className='divula'></div>


      


   
      </>
  )
}


export default Main;