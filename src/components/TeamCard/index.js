import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamMatches from '../TeamMatches'

import './index.css'

class TeamCard extends Component {
  state = {TeamCardData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      url: eachItem.team_image_url,
    }))
    this.setState({TeamCardData: updatedData, isLoading: false})
  }

  renderLoading = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading, TeamCardData} = this.state

    return isLoading ? (
      <div>{this.renderLoading()}</div>
    ) : (
      <div className="TeamCard-container">
        <div className="imgAndHead">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl"
          />
          <h1 className="heading">IPL DashBoard</h1>
        </div>
        <div className="list-container">
          <ul className="list">
            {TeamCardData.map(eachTeam => (
              <TeamMatches key={eachTeam.id} teamMatchDetails={eachTeam} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default TeamCard
