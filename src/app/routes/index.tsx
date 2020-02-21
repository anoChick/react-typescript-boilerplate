import * as React from 'react';
import { Route, Switch, withRouter } from "react-router-dom"
import IndexTemplate from '../components/templates/index'
import PiyoTemplate from '../components/templates/piyo'

export default withRouter(() => (
  <Switch>
    <Route path="/piyo" component={PiyoTemplate} />

    <Route path="/" component={IndexTemplate} />

  </Switch>
));