import React from 'react'
import Career from './Career';
import Essientials from './Essientials';
import Hero from './Hero/Hero';
import Solution from './Solution/Solution';
import Video from './Video';
import Events from './Events';

import PassingCard from './PassingCard';

const Homescreen = () => {
  return (
    <div>
      <Hero />
      <Solution/>
      <Video/>
      <Essientials/>
      <PassingCard/>
      <Events/>
      <Career/>
    </div>
  );
}

export default Homescreen