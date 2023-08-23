import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
//import "./NavBar.css";

export default function NavBar({user, setUser}) {

  function handleLogOut() {
    userService.logOut();
    //setUser(null);
    window.location.reload(false);
  }

  return (
    <header>
      <div className="nav-contents">
        
        <h1>Authentication</h1>
          Welcome { user.username }!
       <br />
       <br />        
        <nav>
          <Link to="/" >Log In</Link>
          &nbsp;
          &nbsp;
          <Link to="/new" >New User</Link>
          &nbsp;
          &nbsp;
          <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
        </nav>
      </div>
    </header>
  );
}