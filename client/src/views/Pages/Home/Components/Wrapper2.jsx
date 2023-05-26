import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import spinner from "../../../../assets/images/spinner.svg";

function Wrapper2() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch("/api/v1/cupoftea/categories");
                if (!res.ok) {
                    throw new Error(`status : ${res.status}, message : ${res.statusText}`);
                }
                const data = await res.json();
                setCategory(data.categories);
            }
            catch (error) {
                console.log(`Problem to fetch categories`, error);
            }
        }
        fetchCategories();
    }, [])


    return (
        <section className="category-menu">

            <h3><span className="middle_border"></span>Choisissez votre th&eacute;<span className="middle_border"></span></h3>

            <nav>
                {(!category.length < 0) ?
                    <figure>
                        <img src={spinner} alt="chargement de la page" />
                        <figcaption>Chargement de la page...</figcaption>
                    </figure> 
                :
                category.map((c) => { return(
                <Link key={c.id} to={`/teas/categories/${c.id}`}
                    className="hover">
                    <img key={c.id} src={c.img} alt={c.imageTitle} />
                    {c.title}
                </Link>)
                })}
            </nav>

        </section>

    )
}

export default Wrapper2;