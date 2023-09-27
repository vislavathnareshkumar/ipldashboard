import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ipl/:id" component={TeamMatches} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
