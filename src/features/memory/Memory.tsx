import React from 'react';
import WayOfTheHeroBox from './components/WayOfTheHeroBox';
import FoolishChoiceBox from './components/FoolishChoiceBox';

interface MemoryProps {

}

const Memory = (props: MemoryProps) => {
  return (
    <div>
      <div className="simple-box_list">
        <WayOfTheHeroBox />
        <FoolishChoiceBox />
      </div>
    </div>
  )
}

export default Memory;
