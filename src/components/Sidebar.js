import React from 'react';
import useCollapse from 'react-collapsed';
import '../assets/styles/Sidebar.scss';
import { IconContext } from 'react-icons'
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';

function Navbar() {
  
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
      <div className='sidenav-menu'>
        <a href='/'><AiIcons.AiOutlineHome /><span>Home</span></a>
        
        <a {...getToggleProps()}><GiIcons.GiBatteryPackAlt /><span>Status</span></a>
        <div {...getCollapseProps()}>
          <b><BsIcons.BsPersonFill /><span>Ajairu Kogiti</span></b>
          <b><BsIcons.BsPersonFill /><span>Pax Kal-Yuri</span></b>
          <b><BsIcons.BsPersonFill /><span>T0-RQ</span></b>
        </div>
        
        <a {...getToggleProps()}><AiIcons.AiOutlineUnorderedList /><span>Items</span></a>
        <div {...getCollapseProps()}>
          <b><BsIcons.BsPersonFill /><span>Ajairu Kogiti</span></b>
          <b><BsIcons.BsPersonFill /><span>Pax Kal-Yuri</span></b>
          <b><BsIcons.BsPersonFill /><span>T0-RQ</span></b>
        </div>
        
        <a {...getToggleProps()}><GiIcons.GiStarsStack /><span>Talents</span></a>
        <div {...getCollapseProps()}>
          <b><BsIcons.BsPersonFill /><span>Ajairu Kogiti</span></b>
          <b><BsIcons.BsPersonFill /><span>Pax Kal-Yuri</span></b>
          <b><BsIcons.BsPersonFill /><span>T0-RQ</span></b>
        </div>
        
        <a {...getToggleProps()}><GiIcons.GiBattleGear /><span>Gear</span></a>
        <div {...getCollapseProps()}>
          <b><BsIcons.BsPersonFill /><span>Ajairu Kogiti</span></b>
          <b><BsIcons.BsPersonFill /><span>Pax Kal-Yuri</span></b>
          <b><BsIcons.BsPersonFill /><span>T0-RQ</span></b>
        </div>
        
        <a {...getToggleProps()}><BsIcons.BsInfoCircle /><span>Info</span></a>
          <div {...getCollapseProps()}>
          <b><BsIcons.BsPersonFill /><span>Ajairu Kogiti</span></b>
          <b><BsIcons.BsPersonFill /><span>Pax Kal-Yuri</span></b>
          <b><BsIcons.BsPersonFill /><span>T0-RQ</span></b>
        </div>
      </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
/* SUBNAV MENU EXAMPLE
<div class="navbar">
  <a href="#home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#company">Company</a>
      <a href="#team">Team</a>
      <a href="#careers">Careers</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Bring</a>
      <a href="#deliver">Deliver</a>
      <a href="#package">Package</a>
      <a href="#express">Express</a>
    </div>
*/