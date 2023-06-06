import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import './index.css'

class MatchCard extends Component {
  state = {NewMatch: [], oldMatch: [], isLoading: true}

  componentDidMount() {
    this.getLatestMatchDetails()
    this.getRecentMatchDetails()
  }

  getLatestMatchDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/KKR')
    const data = await response.json()

    const updatedLatestData = data.latest_match_details.map(eachLatest => ({
      id: eachLatest.id,
      teamBannerUrl: eachLatest.team_banner_url,
      umpires: eachLatest.umpires,
      result: eachLatest.result,
      date: eachLatest.data,
      venue: eachLatest.venue,
      competingTeam: eachLatest.competing_team,
      competingLogo: eachLatest.competing_team_logo,
      firstInnings: eachLatest.first_innings,
      secondInnings: eachLatest.second_innings,
      matchStatus: eachLatest.match_status,
    }))
    this.setState({NewMatch: updatedLatestData, isLoading: false})
  }

  getRecentMatchDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/KKR')
    const data = await response.json()

    const updatedRecentData = data.recent_matches.map(eachLatest => ({
      id: eachLatest.id,
      teamBannerUrl: eachLatest.team_banner_url,
      umpires: eachLatest.umpires,
      result: eachLatest.result,
      date: eachLatest.data,
      venue: eachLatest.venue,
      competingTeam: eachLatest.competing_team,
      competingLogo: eachLatest.competing_team_logo,
      firstInnings: eachLatest.first_innings,
      secondInnings: eachLatest.second_innings,
      matchStatus: eachLatest.match_status,
    }))
    this.setState({oldMatch: updatedRecentData, isLoading: false})
  }

  render() {
    const {LatestMatchDetails} = this.props
    const {NewMatch, oldMatch, isLoading} = this.state

    return (
      <div>
        <ul>
          {NewMatch.map(eachData => (
            <LatestMatch key={eachData.id} LatestMatchDetails={eachData} />
          ))}
        </ul>
        <ul>
          {oldMatch.map(eachItems => (
            <LatestMatch key={eachItems.id} LatestMatchDetails={eachItems} />
          ))}
        </ul>
      </div>
    )
  }
}
export default MatchCard
