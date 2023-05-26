import { useState, useEffect } from 'react';

import spinner from "../../../../assets/images/spinner.svg";

import Card from "./Card";

function Aside() {
    const [_new, setNew] = useState({});
    const [favorite, setFavorite] = useState({});

    useEffect(() => {
        async function getDatas() {
            try {
                const res = await fetch("/api/v1/cupoftea/new");
                const res2 = await fetch("/api/v1/cupoftea/favorite");
                if (!res.ok || !res2.ok) {
                    throw new Error(`status res new : ${res.status}, message res new : ${res.statusText}
                                    status res favorite : ${res2.status}, message res favorite : ${res2.statusText}`);
                }
                const newData = await res.json();
                const favoriteData = await res2.json();
                setNew(newData.datas[0]);
                setFavorite(favoriteData.datas[0]);

                // console.log(newData.datas[0].length);
                    // favoriteData.datas[0]);
            }
            catch (error) {
                console.log(`Problem to fetch datas`, error);
            }
        }
        getDatas();
    }, [])

    return (
        <aside className="suggestions">
            {(!_new.length < 0 || !favorite.length < 0) ?
                <figure>
                    <img src={spinner} alt="chargement de la page" />
                    <figcaption>Chargement de la page...</figcaption>
                </figure>
                :
                (<>
                    <Card className="new"
                        id={_new.teaId}
                        title="Notre nouveauté"
                        src={_new.url}
                        alt={_new.imageTitle}
                        legend={_new.teaTitle}
                        txt={_new.teaDescription}
                        price={_new.price} />
                    <Card className="favorite"
                        id={favorite.teaId}
                        title="Notre coup de coeur"
                        src={favorite.url}
                        alt={favorite.imageTitle}
                        legend={favorite.teaTitle}
                        txt={favorite.teaDescription}
                        price={favorite.price} />
                </>
                )
            }
        </aside>
    )
}

export default Aside;