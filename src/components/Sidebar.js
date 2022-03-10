import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import '../assets/styles/Sidebar.scss';
import { IconContext } from 'react-icons'

function Navbar() {

  /*let image = require('../assets/images/sphere2-unscreen.gif').default;
  const states = {
    'default': '',
    'hover': {image}
  }

  let img = document.querySelector('#hover-img');

  img.addEventListener('mouseenter', function(e) {
    img.setAttribute('src', states.hover);
  });
  img.addEventListener('mouseleave', function(e) {
    img.setAttribute('src', states.default);
  });*/

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className='nav-menu active'>
        <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => {
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })};
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar