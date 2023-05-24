import {useState, useEffect} from 'react';

import spinner from "../../../../assets/images/spinner.svg";

import Card from "./Card";

function Aside() {
    const [tea, setTea] = useState([]);

    useEffect(() => {
        async function fetchDatas() {
            try {
                const res = await fetch("/api/v1/cupoftea/teas");
                if (!res.ok) {
                    throw new Error(`status : ${res.status}, message : ${res.statusText}`);
                }
                const data = await res.json();
                setTea(data.teas)
                console.log(Object.keys(data.teas[0])[5]);
            }
            catch (error) {
                console.log(`Problem to fetch teas`, error);
            }
        }
        fetchDatas();
    }, [])

    return (
        <aside className="suggestions">
            {(!tea.length) ? <img className="spinner" src={spinner} alt="Chargement de la page" /> :
                tea.map((c) => {
                    return (
                            <Card className={Object.keys(tea[0])[5]}

                             />
                    )})}
        </aside>
    )
}

export default Aside;