import { useState, useEffect } from "react";
import CardTea from "./CardTea";

import spinner from "../../../../assets/images/spinner.svg";

function Wrapper() {

    const [category, setCategory] = useState([]);
    const [tea, setTea] = useState([]);
    const [price, setPrice] = useState([]);

    useEffect(() => {
        async function fetchDatas() {
            try {
                const res = await fetch("/api/v1/cupoftea/categories");
                const res2 = await fetch("/api/v1/cupoftea/teas");
                const res3 = await fetch("/api/v1/cupoftea/packsteas");


                if (!res.ok || !res2.ok || !res3.ok) {
                    throw new Error(`status res categories : ${res.status}, message categories error : ${res.statusText},
                    status res teas : ${res2.status}, message res teas : ${res2.statusText}
                    status res prices : ${res3.status}, message res prices: ${res3.statusText}`);
                }

                const data = await res.json();
                setCategory(data.categories);

                const dataTea = await res2.json();
                setTea(dataTea.teas);

                const dataprice = await res3.json();
                setPrice(dataprice.packsTeas);

            }
            catch (error) {
                console.log(`Problem to fetch datas`, error);
            }
        }
        fetchDatas();
    }
    , []);

    return (
        <>
            {(!category.length || !tea.length || !price.length) < 0 ?
                <figure>
                    <img src={spinner} alt="chargement de la page" />
                    <figcaption>Chargement de la page...</figcaption>
                </figure>
                :
                category.map((c,i) => {
                    return (
                        <section key={c.id}>
                            <h2>{c.title}<span className="middle_border"></span></h2>
                            <img src={c.url} alt={c.imageTitle} />
                            <p>{c.description}</p>
                            {tea.map((t) => { if(t.category_id === c.id)  
                                return (
                                    <CardTea id={t.id}
                                        title={t.title}
                                        url={t.url}
                                        imageTitle={t.imageTitle}
                                        minPrice={price.map((p,i) => {
                                           if (p.packaging_id === 1 && p.tea_id === t.id) 
                                            return p.price ;
                                        })}/>);
                            })}
                        </section>
                    )
                })}
        </>
    )
}

export default Wrapper;