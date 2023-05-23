import { Link } from "react-router-dom";

function Card() {
    return (
        <article>
            <h3><span className="middle_border"></span>Notre nouveaut&eacute;</h3>
            <figure>
                <img src="" alt="" />
                <figcaption>Th&eacute; du hammam</figcaption>
            </figure>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ex, quo sequi, sunt a voluptatem totam dignissimos minus
                aperiam eum quam dolor quas adipisci quaerat sed expedita incidunt
                ipsum, eius ut nostrum ipsa illum at vitae? Quam.
            </p>

            <p>&Aacute; partir de <span>8,50&euro;</span></p>

            <Link to={"/teas/:id"} className="link_products_page">voir ce produit</Link>

        </article>
    )
}

export default Card;