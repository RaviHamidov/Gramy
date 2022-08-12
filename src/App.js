import './App.css';
import Nav from './Components/Nav/Navigation';
import Bar from './Components/Bar/Bar';
import Footer from './Components/Footer/Footer';
import React from 'react';
import Carousel from './Components/Carousel/Carousel';
import Section from './Components/Sections/Section';

function App() {
  return (
   <>
  <Nav />

  <Bar />

  <Carousel/>

    <Section header={"Ən yeni məhsullar"} name={"Baxım məhsulları"} description={"Almaniyadan gətirilmiş təbii baxım məhsulları"} price={12}/>
  <Footer/>

  <p className='text-center'>Created by Wolf Team :)</p>
   </>
  );
}

export default App;
