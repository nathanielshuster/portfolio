import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter, Redirect } from "react-router"

import { NavigationBar } from './components/NavigationBar'
import { Home } from './routes/Home'
import { Projects } from './routes/Projects'
import { About } from './routes/About'
import { Contact } from './routes/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default withRouter(App)
