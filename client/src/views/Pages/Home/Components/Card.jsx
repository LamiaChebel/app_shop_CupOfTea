import { Link } from "react-router-dom";

function Card(props) {
    const {id,title, src, alt, legend, txt, price, name} = props;

    return (
        <article className={name}>
            <h3><span className="middle_border"></span>{title}<span className="middle_border"></span></h3>
            <figure>
                <img src={src} alt={alt} />
                <figcaption>{legend}</figcaption>
            </figure>

            <p>{txt}</p>

            <p>&Aacute; partir de <span>{price} &euro;</span></p>

            <Link to={`/teas/${id}`} className="cta link">voir ce produit</Link>

        </article>
    )
}

export default Card;