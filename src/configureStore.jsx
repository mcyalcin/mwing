import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer }  from 'react-router-redux'

import app from './reducers'

const history = createHistory()
const router = routerMiddleware(history)

const configureStore = () => {
  const middlewares = [router]

  if (process.env.NODE_ENV !== 'production') middlewares.push(logger)

  const store = createStore(
    combineReducers({
      app,
      router: routerReducer,
    }),
    applyMiddleware(...middlewares),
  )
  return { store, history }
}

export default configureStore
