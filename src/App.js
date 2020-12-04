import React, { useState, useEffect } from 'react'

import './App.css';
import Header from './components/header/header.component';
import Headline from './components/headline/headline.component';
import Profile from './components/profile/profile.component'
import Portfolio from './components/portfolio/portfolio.component';

function App() {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    setVisible(window.pageYOffset>0)}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className="App">
      <Header visible={visible}/>
      <Headline/>
      <Profile/>
      <Portfolio/>
    </div>
  );
}

export default App;
