import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <Link to="/teas"  className="link" >th&eacute;s</Link>
            <Link to="/about"  className="link">notre histoire</Link>
            <Link to="/admin"  className="link">admin</Link>
        </nav>
    )
}

export default Nav;