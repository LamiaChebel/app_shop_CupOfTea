import Card1 from "../Cards/Card1";

import amelie from "../../../../../assets/images/amelie.jpg";
import xavier from "../../../../../assets/images/xavier.jpg";

function Wrapper1() {
    return(
        <section>
                <h2>Notre &eacute;quipe</h2>
                <Card1 title="Amélie, fondatrice de Cup of Tea"
                src={amelie} />
                <Card1 title="Xavier, fondateur de Cup of Tea"
                src={xavier} />
        </section>
    )
}

export default Wrapper1;