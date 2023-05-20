import {Link} from "react-router-dom";

import { datas } from "../../../../datas/datasFooter.js";

function Wrapper3 () {

    return (
            <section className="submenu" >
                <h2>{datas[2].title}</h2>
                <nav key={datas[2].id}>
                    {datas[2].links.map((link,i) => (<Link key={i} to={link.url}>{link.description}</Link>))}
                </nav> 
        </section>

    )
}

export default Wrapper3;