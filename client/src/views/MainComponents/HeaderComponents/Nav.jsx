import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <Link to={"/teas"}>th&eacute;s</Link>
            <Link to={"/about"}>notre histoire</Link>
            <Link to={"/admin"}>admin</Link>
        </nav>
    )
}

export default Nav;