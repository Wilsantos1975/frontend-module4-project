import { Link, useNavigate } from "react-router-dom"
import "./Nav.css"



function Nav() {

  const navigate = useNavigate();

  return (
    <nav>
      <h1 className="title"><Link to="/" className="home-link">Budget App</Link></h1>
      <br></br>
      {/* <Link to="/transactions/new" onClick={() => navigate('/new')}>New Transaction</Link> */}
      <button className="btn-new"  onClick={() => navigate('/new')}>New Transaction</button>
<h2>Account Total:$</h2>
    </nav>
  )
}

export default Nav
