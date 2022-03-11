import React from 'react';
import '../assets/styles/Sidebar.scss';
import { IconContext } from 'react-icons'
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

function Navbar() {

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
      <div className='sidenav-menu'>
        <a href='/'><AiIcons.AiOutlineHome />
          <span>Home</span></a>
        <a href='/status'><GiIcons.GiBatteryPackAlt />
          <span>Status</span></a>
        <a href='/items'><AiIcons.AiOutlineUnorderedList />
          <span>Items</span></a>
        <a href='/talents'><GiIcons.GiStarsStack />
          <span>Talents</span></a>
        <a href='/gear'><GiIcons.GiBattleGear />
          <span>Gear</span></a>
        <a href='/info'><BsIcons.BsInfoCircle />
          <span>Info</span></a>
      </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar