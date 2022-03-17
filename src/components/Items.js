import React from 'react';
import useCollapse from 'react-collapsed';
import '../assets/styles/Sidebar.scss';
import { IconContext } from 'react-icons'
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

function CharacterOneCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <b {...getToggleProps()}><BsIcons.BsPersonFill /><span>Ajairu Kogiti</span></b>
        <div {...getCollapseProps()}>
          <p><GiIcons.GiBoxUnpacking /><span>Item List</span></p>
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
        <p><GiIcons.GiBoxUnpacking /><span>Item List</span></p>
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
        <p><GiIcons.GiBoxUnpacking /><span>Item List</span></p>
        </div>
    </IconContext.Provider>
    </>
  )
}

export default function ItemsCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
    <a {...getToggleProps()}><AiIcons.AiOutlineUnorderedList /><span>Items</span></a>
        <div {...getCollapseProps()}>
          <CharacterOneCollapse />
          <CharacterTwoCollapse />
          <CharacterThreeCollapse />
        </div>
    </IconContext.Provider>
    </>
  )
}