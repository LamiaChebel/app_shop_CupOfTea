import {Link} from "react-router-dom";

import { datas } from "../../../../datas/datasFooter.js";

import styles from "../../index.module.css";

function Wrapper1 () {

    return (
            <section className="submenu">
                <h2>{datas[0].title}</h2>
                <nav key={datas[0].id}>
                    {datas[0].links.map((link,i) => (<Link key={i} to={link.url} className={styles.link} >{link.description}</Link>))}
                </nav> 
        </section>

    )
}

export default Wrapper1;