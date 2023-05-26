import { useState, useEffect } from "react";
import CardTea from "./CardTea";

import spinner from "../../../../assets/images/spinner.svg";

function Wrapper() {

    const [category, setCategory] = useState([]);
    const [tea, setTea] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch("/api/v1/cupoftea/categories");
                if (!res.ok) {
                    throw new Error(`status : ${res.status}, message : ${res.statusText}`);
                }
                const data = await res.json();
                setCategory(data.categories);
                console.log(data.categories);
            }
            catch (error) {
                console.log(`Problem to fetch categories`, error);
            }
        }

        async function fetchTeas() {
            try {
                const res2 = await fetch("/api/v1/cupoftea/teas");
                if (!res2.ok) {
                    throw new Error(`status : ${res2.status}, message : ${res2.statusText}`);
                }
                const dataTea = await res2.json();
                setTea(dataTea.teas);
            }
            catch (error) {
                console.log(`Problem to fetch teas`, error);
            }
        }

        fetchCategories();
        fetchTeas();

    }, [])

    return (
        <>
            {(!category.length && !tea.length) < 0 ?
                <figure>
                    <img src={spinner} alt="chargement de la page" />
                    <figcaption>Chargement de la page...</figcaption>
                </figure>
                :
                category.map((c) => {
                    return (
                        <section key={c.id}>
                            <h2><span className="middle_border">{c.title}</span></h2>
                            <img src={c.url} alt={c.imageTitle} />
                            <p>{c.description}</p>
                            {tea.map((t) => {
                                return (
                                    <CardTea id={t.id}
                                        title={t.title}
                                        url={t.url}
                                        imageTitle={t.imageTitle}
                                        minPrice={t.id} />)
                            })}
                        </section>
                    )
                })}
        </>
    )
}

export default Wrapper;