import { Link } from "react-router-dom";

import styles from "../index.module.css";

function Nav() {
    return(
        <nav>
            <Link to="/teas" className={styles.link} >th&eacute;s</Link>
            <Link to="/about" className={styles.link} >notre histoire</Link>
            <Link to="/admin" className={styles.link} >admin</Link>
        </nav>
    )
}

export default Nav;