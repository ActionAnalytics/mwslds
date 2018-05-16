import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './style'
import './App.css'

import Header from './header'
import Footer from './footer'
import MinesDashboard from './MinesDashboard'
import MinesSearch from './MinesSearch'
import MinesViewRoute from './MinesViewRoute'

const notFound = () => <h2 className="container">There is nothing here!</h2>

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header title="Mine Seeker">
          <Link to="/">Home</Link>
          <Link to="/mine">Create</Link>
          <Link to="/search">Search</Link>
        </Header>
        <div id="main" className="template gov-container">
          <Switch>
            <Route exact path="/" component={MinesDashboard} />
            <Route path="/mine/:mineId" component={MinesViewRoute} />
            <Route path="/mine" component={MinesViewRoute} />
            <Route path="/search" component={MinesSearch} />
            <Route component={notFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
