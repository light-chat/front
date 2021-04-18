import { Component } from 'react'
import { DisplayMessage } from './components/DisplayMessage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayMessage message="Hello World" isRight />
      </div>
    )
  }
}

export default App
