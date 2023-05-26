import {Link} from "react-router-dom";
import matcha from "../../../assets/images/Page 404 images/high-angle-matcha-tea-poured-cup.jpg";


function ErrorPage(){
    return(
        <main className="error_page">
            <h2>Error 404</h2>
            <p>Oops ! Vous avez perdu votre chemin. Alors c'est le moment de prendre une pause thé.
            </p>

            <img src={matcha} alt="" />
            <p>... Bon, il est temps de revenir découvrir nos merveilleux thés !</p>
            <Link to="/" className="link back">Retour vers l'accueil</Link>
        </main>
    )
}

export default ErrorPage;