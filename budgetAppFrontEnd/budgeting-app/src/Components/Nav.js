import { Link } from "react-router-dom"



function Nav() {
  return (
    <div>
      <Link to="/"><h1>Budget App</h1></Link>
      <br></br>
      <Link to="/transactions/new">New Transaction</Link>
    </div>
  )
}

export default Nav
