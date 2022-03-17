import React from 'react';
import useCollapse from 'react-collapsed';
import '../assets/styles/Sidebar.scss';
import { IconContext } from 'react-icons'
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

function TreeCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <p {...getToggleProps()}><GiIcons.GiFamilyTree /><span>Tree View</span></p>
        <div {...getCollapseProps()}>
          <p><GiIcons.GiFamilyTree /><span>Tree One Link</span></p>
          <p><GiIcons.GiFamilyTree /><span>Tree Two Link</span></p>
          <p><GiIcons.GiFamilyTree /><span>Tree Three Link</span></p>
        </div>
    </IconContext.Provider>
    </>
  )
}

function ListCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <p {...getToggleProps()}><AiIcons.AiOutlineUnorderedList /><span>List View</span></p>
        <div {...getCollapseProps()}>
          <p><GiIcons.GiFamilyTree /><span>Talent List</span></p>
        </div>
    </IconContext.Provider>
    </>
  )
}


function CharacterOneCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <b {...getToggleProps()}><BsIcons.BsPersonFill /><span>Ajairu Kogiti</span></b>
        <div {...getCollapseProps()}>
          <TreeCollapse />
          <ListCollapse />
        </div>
    </IconContext.Provider>
    </>
  )
}

function CharacterTwoCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <b {...getToggleProps()}><BsIcons.BsPersonFill /><span>Pax Kal-Yuri</span></b>
        <div {...getCollapseProps()}>
          <TreeCollapse />
          <ListCollapse />
        </div>
    </IconContext.Provider>
    </>
  )
}

function CharacterThreeCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <b {...getToggleProps()}><BsIcons.BsPersonFill /><span>T0-RQ</span></b>
        <div {...getCollapseProps()}>
          <TreeCollapse />
          <ListCollapse />
        </div>
    </IconContext.Provider>
    </>
  )
}

export default function TalentsCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
    <a {...getToggleProps()}><GiIcons.GiStarsStack /><span>Talents</span></a>
        <div {...getCollapseProps()}>
          <CharacterOneCollapse />
          <CharacterTwoCollapse />
          <CharacterThreeCollapse />
        </div>
    </IconContext.Provider>
    </>
  )
}