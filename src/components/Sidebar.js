import React from 'react';
import StatusCollapse from './Status'
import ItemsCollapse from './Items'
import TalentsCollapse from './Talents'
import GearCollapse from './Gear'
import InfoCollapse from './Info'
import '../assets/styles/Sidebar.scss';
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai';

function Navbar() {

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
      <div className='sidenav-menu'>
        <a href='/'><AiIcons.AiOutlineHome /><span>Home</span></a>
        <StatusCollapse />
        <ItemsCollapse />
        <TalentsCollapse />
        <GearCollapse />
        <InfoCollapse />
      </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar