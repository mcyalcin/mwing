import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from './components'
import configureStore from './configureStore'

const { store, history } = configureStore()

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
)
