import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Components/Header/Header';
import './Main.scss'
import { MainContent } from '../Components/MainContent/MainContent';
import Footer from '../Components/Footer/Footer';
import FollowUs from '../Components/FollowUs/FollowUs';



function Main() {
  
  return (
    <>
      
      <Header />
      <MainContent />
      <Footer />
      <FollowUs/>
      

     


      


   
      </>
  )
}


export default Main;