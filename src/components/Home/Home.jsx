import React from 'react'
import Section1 from './section1/section1';
import Section1ii from './section1ii/section1ii'
import Section2 from './section2/section2';
import Shoping1 from './shoping1/shoping1';
import Shoping2 from './shoping2/shoping2';
import Section3 from './section3/section3';
import Shoping3 from './shoping3/shoping3';
import Section4 from './section4/section4';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
const Home = () => {
  return (
<>
  <Navbar />
    <div className='mainHomediv' style={{width:"90%", margin:"auto"}} >
      
      <Section1 />
      <Section1ii />
      <Shoping1 />
      <Section2 />
      <Shoping2 />
      <Section3 />
      <Shoping3 />
      <Section4 />
    </div>

    <Footer />
</>
  )
}

export default Home;