// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Navbar from './Ravbar'
import Main from './Main'
import SquadBuilder from './SquadBuilder'
import Lobby from './Lobby'
import Profile from './Profile'

const Root = ({ store, history }: { store: Object, history: Object }) =>  (
  <Provider store={store}>
    <div className="container">    
      <Navbar />
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/squadbuilder/' component={SquadBuilder}/>
          <Route exact path='/lobby/' component={Lobby}/>
          <Route exact path='/profile/' component={Profile}/>
        </Switch>
      </ConnectedRouter>
    </div>
  </Provider>
)

export default Root
