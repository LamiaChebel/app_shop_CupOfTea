import { Link } from "react-router-dom";

function Card(props) {
    const {id,title, src, alt, legend, txt, price, name} = props;

    return (
        <article className={name}>
            <h3><span className="middle_border">{title}</span>Notre nouveaut&eacute;<span className="middle_border"></span></h3>
            <figure>
                <img src={src} alt={alt} />
                <figcaption>Th&eacute; du hammam {legend}</figcaption>
            </figure>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ex, quo sequi, sunt a voluptatem totam dignissimos minus
                aperiam eum quam dolor quas adipisci quaerat sed expedita incidunt
                ipsum, eius ut nostrum ipsa illum at vitae? Quam. {txt}
            </p>

            <p>&Aacute; partir de <span>8,50&euro; {price} </span></p>

            <Link to={`/teas/${id}`} className="cta link">voir ce produit</Link>

        </article>
    )
}

export default Card;