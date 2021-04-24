import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './store'

const rootElement = document.getElementById('root')
const FullApp = <React.StrictMode>

  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>

ReactDOM.render(
  FullApp,
  rootElement,
)

reportWebVitals()
