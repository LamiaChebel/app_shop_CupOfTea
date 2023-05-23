import noel from "../../../../assets/images/offre-noel.jpg";

import Slider from "./Slider";

function Wrapper1() {
    return (
        <section className="event">
            <h2>C&apos;est no&euml;l, profitez-en !</h2>

            <figure className="promo">
                <img src={noel} alt="" />
                <figcaption>Pour toute commande effectu&eacute;e avant le 20 d&eacute;cembre</figcaption>
            </figure>

            <Slider />            
        </section>
    )
}

export default Wrapper1;