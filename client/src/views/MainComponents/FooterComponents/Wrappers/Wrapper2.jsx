import {Link} from "react-router-dom";

import { datas } from "../../../../datas/datasFooter.js";

function Wrapper2 () {

    return (
            <section className="submenu" >
                <h2>{datas[1].title}</h2>
                <nav key={datas[1].id}>
                    {datas[1].links.map((link,i) => (<Link key={i} to={link.url}>{link.description}</Link>))}
                </nav> 
        </section>

    )
}

export default Wrapper2;