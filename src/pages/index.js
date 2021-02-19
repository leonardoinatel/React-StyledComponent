import React, { useState } from 'react'

import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle} />
      <HeroSection />
    </>
  )
}

export default Home
