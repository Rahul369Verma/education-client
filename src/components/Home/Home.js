import React from 'react';
import "./Home.css"
import { HomeCard } from '../HomeCard/HomeCard';

export const Home = () => {
  return <div className='home-container'>
    <div className="shadow mb-2 p-2 bg-white rounded">
      Add new Profile to Crunchbase
    </div>
    <div>
      <HomeCard />
    </div>
  </div>;
};
