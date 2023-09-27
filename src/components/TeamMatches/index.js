import React, {Component} from 'react'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()

    const {team_banner_url, latest_match_details, recent_matches} = teamData

    console.log(teamData)

    this.setState({
      teamBannerUrl: team_banner_url,
      latestMatchDetails: latest_match_details,
      recentMatches: recent_matches,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchDetails, recentMatches} = this.state
    return <div className="team-match-container">Hello</div>
  }
}

export default TeamMatches
