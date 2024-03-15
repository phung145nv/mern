import React from 'react'
import Hero from './../components/Hero/Hero.js' 
import Popular from '../components/Popular/Popular.js';
import NewCollection from '../components/NewCollection/NewCollection.js';
import NewLetter from '../components/NewLetter/NewLetter.js';

const Home = () => {
   return (
     <div>
      <Hero/>
      <Popular/>
      <NewCollection/>
      <NewLetter/>
     </div>
   )
 }
 
export default Home;
