// Write your code here
import {Link} from 'react-router-dom'

import TeamCard from '../TeamCard'

const Home = () => (
  <Link to="/">
    <TeamCard />
  </Link>
)
export default Home
