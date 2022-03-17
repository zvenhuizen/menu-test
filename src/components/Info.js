import React from 'react';
import useCollapse from 'react-collapsed';
import '../assets/styles/Sidebar.scss';
import { IconContext } from 'react-icons'
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

function AttributesCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <p {...getToggleProps()}><GiIcons.GiSkills /><span>Attributes</span></p>
        <div {...getCollapseProps()}>
          <p><AiIcons.AiOutlineUnorderedList /><span>Attribute List</span></p>
        </div>
    </IconContext.Provider>
    </>
  )
}

function ObligationCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <p {...getToggleProps()}><GiIcons.GiHandcuffed /><span>Obligations</span></p>
        <div {...getCollapseProps()}>
          <p><AiIcons.AiOutlineUnorderedList /><span>Obligation List</span></p>
        </div>
    </IconContext.Provider>
    </>
  )
}

function DutyCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <p {...getToggleProps()}><FaIcons.FaHandshake /><span>Duty</span></p>
        <div {...getCollapseProps()}>
          <p><AiIcons.AiOutlineUnorderedList /><span>Duty List</span></p>
        </div>
    </IconContext.Provider>
    </>
  )
}

function MoralityCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <p {...getToggleProps()}><FaIcons.FaBalanceScaleLeft /><span>Morality</span></p>
        <div {...getCollapseProps()}>
          <p><AiIcons.AiOutlineUnorderedList /><span>Morality List</span></p>
        </div>
    </IconContext.Provider>
    </>
  )
}

function MotivationCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
        <p {...getToggleProps()}><GiIcons.GiFist /><span>Motivation</span></p>
        <div {...getCollapseProps()}>
          <p><AiIcons.AiOutlineUnorderedList /><span>Motivation List</span></p>
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
          <p><GiIcons.GiNotebook /><span>Background</span></p>
          <AttributesCollapse />
          <ObligationCollapse />
          <DutyCollapse />
          <MoralityCollapse />
          <MotivationCollapse />
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
        <p><GiIcons.GiNotebook /><span>Background</span></p>
          <AttributesCollapse />
          <ObligationCollapse />
          <DutyCollapse />
          <MoralityCollapse />
          <MotivationCollapse />
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
        <p><GiIcons.GiNotebook /><span>Background</span></p>
          <AttributesCollapse />
          <ObligationCollapse />
          <DutyCollapse />
          <MoralityCollapse />
          <MotivationCollapse />
        </div>
    </IconContext.Provider>
    </>
  )
}

export default function InfoCollapse() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <>
    <IconContext.Provider value={{ color: '#fff' }}> {/*Turns icons this color*/}
    <a {...getToggleProps()}><BsIcons.BsInfoCircle /><span>Info</span></a>
        <div {...getCollapseProps()}>
          <CharacterOneCollapse />
          <CharacterTwoCollapse />
          <CharacterThreeCollapse />
        </div>
    </IconContext.Provider>
    </>
  )
}