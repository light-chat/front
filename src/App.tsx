import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { ChooseUsername } from './pages/ChooseUsername'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <ChooseUsername />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
