import './index.css'

import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  state = {
    teamCard: [],
  }

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()

    const updatedNewData = teams.map(each => ({
      name: each.name,
      id: each.id,
      imageUrl: each.team_image_url,
    }))

    this.setState({teamCard: updatedNewData})
  }

  render() {
    const {teamCard} = this.state
    return (
      <ul className="team-card-container">
        {' '}
        {teamCard.map(team => (
          <Link to={`/ipl/${team.id}`} className="blog-item-link">
            {' '}
            <li className="list-items" key={team.id}>
              <img alt={team.name} src={team.imageUrl} className="team-log" />
              <h1 className="team-heading">{team.name}</h1>
            </li>
          </Link>
        ))}
      </ul>
    )
  }
}

export default TeamCard
