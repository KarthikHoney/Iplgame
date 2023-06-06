import './index.css'

const LatestMatch = props => {
  const {LatestMatchDetails} = props
  const {
    teamBannerUrl,
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = LatestMatchDetails

  renderLatestMatch = () => (
    <li className="latest-container">
      <div className="latestDetail">
        <div>
          <h1 className="teamName">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div>
          <img
            src={competingLogo}
            alt={`${competingTeam}`}
            className="logoOfTeam"
          />
        </div>
      </div>
      <hr className="line" />
      <p className="date">First Innings</p>
      <p className="result">{firstInnings}</p>
      <p className="date">second Innings</p>
      <p className="result">{secondInnings}</p>
      <p className="date">Man of the Match</p>
      <p className="result">{manOfTheMatch}</p>
      <p className="date">umpires</p>
      <p className="result">{umpires}</p>
    </li>
  )

  renderRecentMatch = () => (
    <li className="recentMatch">
      <div className="recentMatchContainer">
        <img
          src={competingLogo}
          alt={`${competingTeam}`}
          className="logoOfTeam"
        />
        <p className="result">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className="result">{matchStatus}</p>
      </div>
    </li>
  )

  return (
    <>
      <div>{this.renderLatestMatch()}</div>
      <div>{this.renderRecentMatch()}</div>
    </>
  )
}
export default LatestMatch
