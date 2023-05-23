import { Link, Outlet } from "react-router-dom";

function CardTea(){
    return(
        <>
        {/* si le chemin est teas alors on retourne le 1er élément sinon on retourne le deuxième élément */}
        <article>
            <h3></h3>
            <img src="" alt="" />
            <p><span className="price"></span></p>
            <Link to={"/teas/:id"} className="cta">voir ce produit</Link>
        </article>
        <Outlet />
        </>
    )
}

export default CardTea;