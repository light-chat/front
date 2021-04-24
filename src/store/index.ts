import { createStore, combineReducers } from 'redux'
import { userReducer } from './user/reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const rootReducer = combineReducers({
  user: userReducer
})

export const store = createStore(rootReducer, devToolsEnhancer({}))
