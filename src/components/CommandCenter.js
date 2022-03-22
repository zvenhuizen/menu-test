import React from 'react';
import '../assets/styles/Navbar.scss'

class CommandCenter extends React.Component {


  render () {
    return (
      <>
      <div className={'command-center'}>
        <a href='/mission' className={'command-mission'}>Current Mission</a>
        <a href='/characters' className={'command-characters'}>Characters</a>
        <a href='/fleet' className={'command-fleet'}>Fleet</a>
        <a href='/org' className={'command-org'}>Organization</a>
      </div>
      </>
    )
  }
}

export default CommandCenter