import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="ipl-main-container">
          <div className="main-logo-heading">
            <img
              className="ipl-logo"
              alt="ipl logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          <TeamCard />
        </div>
      </div>
    )
  }
}

export default Home
