import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'

import './App.css';
import Header from './components/header/header.component';
import Headline from './components/headline/headline.component';
import Profile from './components/profile/profile.component'
import Portfolio from './components/portfolio/portfolio.component';


function App() {
  let { id } = useParams()
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={()=><Header headline/>}/>
        <Route exact path='/aboutme' render={()=><Header aboutme/>}/>
        <Route exact path='/projects' render={()=><Header projects/>}/>
        <Route exact path='/skills' render={()=><Header skills/>}/>
        <Route exact path='/contact' render={()=><Header contact/>}/>
      </Switch>
      <Switch>
        <Route exact path='/' component={Headline}/>
        <Route exact path='/aboutme' component={Profile}/>
        <Route exact path='/projects' component={Portfolio}/>
      </Switch>
    </div>
  );
}

export default App;
