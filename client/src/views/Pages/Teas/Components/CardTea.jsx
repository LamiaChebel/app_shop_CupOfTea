import { Link, Outlet } from "react-router-dom";

function CardTea(props) {
    const { id, title, url, imageTitle, minPrice } = props;

    return (
        <>
        <article key={id}>
            <h3>{title}</h3>
            <img src={url} alt={imageTitle} />
            <p>A&acute;<span className="price">{minPrice}</span></p>
            <Link to={`/teas/${id}`} className="cta">voir ce produit</Link>
        </article>

        < Outlet />
        </>
    )
}

export default CardTea;