import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router"

import { NavigationBar } from './components/NavigationBar'
import { Home } from './routes/Home'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(App)
