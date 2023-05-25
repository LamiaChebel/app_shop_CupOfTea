import { Link } from "react-router-dom";

import List from "./FooterComponents/List";
import Wrapper1 from "./FooterComponents/Wrappers/Wrapper1";
import Wrapper2 from "./FooterComponents/Wrappers/Wrapper2";
import Wrapper3 from "./FooterComponents/Wrappers/Wrapper3";

function Footer() {


    return (
        <footer>
            <List />
            <div className="footerMenu">
                    <Wrapper1 />
                    <Wrapper2 />
                    <Wrapper3 />             
            </div>

            <p className="txtFooter">

                <Link rel="license" to={"https://3wa.fr/propriete-materiel-pedagogique/"} className="link">
                    <img alt="Propriété de la 3W Academy" src="https://3wa.fr/wp-content/themes/3wa2015/img/logos/big.png"
                         /></Link>

                

                    Cet exercice de <Link to={"https://3wa.fr"} className="link">3W Academy</Link> est mis à disposition
                    <Link rel="license" to={"https://3wa.fr/propriete-materiel-pedagogique/"} className="link" >pour
                    l'usage personnel des étudiants, Pas de Rediffusion - Attribution -
                    Pas d'Utilisation Commerciale - Pas de Modification - International.</Link>.
                  
                    Les autorisations au-delà du champ de cette licence peuvent être obtenues auprès de
                    <Link to={"mailto:contact@3wa.fr"} rel="cc:morePermissions" className="link" >contact@3wa.fr</Link>.
                    Les maquettes ont été réalisées par <Link to={"http://www.justine-muller.fr"} className="link">Justine Muller</Link>.

                    </p>

                </footer>
                );
}

export default Footer;