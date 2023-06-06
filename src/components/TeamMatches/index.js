import {Link} from 'react-router-dom'

import './index.css'

const TeamMatches = props => {
  const {teamMatchDetails} = props
  const {name, id, url} = teamMatchDetails

  return (
    <Link to={`/team-matches/:${id}`}>
      <li className="container">
        <div className="card-container">
          <img src={url} alt={`${name}`} className="pic" />
          <p className="para">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamMatches
