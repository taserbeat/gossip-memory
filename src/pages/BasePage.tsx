import React from 'react';
import icon from '../assets/Mask_of_Truth_-_OOT64_icon.png'

interface BasePageProps {

}

const BasePage: React.FC<BasePageProps> = (props) => {
  return (
    <div>
      <header>
        <div className="logo">
          <p>Gossip Memory</p>
        </div>

        <img className="icon" src={icon} alt="icon" />
      </header>

      <div className="content">
        {props.children}
      </div>

      <footer>
        <p>created by taserbeat 2021</p>
      </footer>
    </div>
  )
}

export default BasePage;
