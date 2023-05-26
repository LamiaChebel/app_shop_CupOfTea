import { useEffect, useState } from "react";
// import EditTea from "./Create/EditTea";

import spinner from "../../../../../assets/images/spinner.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

function CrudTeas() {

    const [teas, setTeas] = useState([]);
    const [key, setKey] = useState("");

    useEffect(() => {
        async function fetchTeas() {
            try {
                const res = await fetch(`/api/v1/cupoftea/teas`);
                if (!res.ok) {
                    throw new Error(`status : ${res.status}, message : ${res.statusText}`);
                }
                const results = await res.json();

                setTeas(results.teas);
                setKey(results.teas[0]);
                console.log(results.teas[0]);
            }
            catch (error) {
                console.log(`Problem to fetch teas`, error);
            }
        }
        fetchTeas();
    }, [])


    return (

        <>
            {(!teas.length && !key.length) < 0 ?
                <figure>
                    <img src={spinner} alt="chargement de la page" />
                    <figcaption>Chargement de la page...</figcaption>
                </figure>
                : <>
                    <h3>Liste des thés</h3>

                    <table>
                        < thead >
                            <tr>
                                {Object.keys(key).map((k, i) => {
                                    return ((k === "imageTitle" || k === "category_id") ? <></> : <th key={i}>{k}</th>)
                                })}
                                <th>Actions</th>
                            </tr>
                        </thead >
                        <tbody>
                            {teas.map((tea, i) => {
                                let d = new Date(tea.created_at);
                                return (
                                    <tr key={i}>
                                        <td>{tea.id}</td>
                                        <td>{tea.title}</td>
                                        <td>{tea.subtitle}</td>
                                        <td>{tea.description}</td>
                                        <td>{tea.story_tea}</td>
                                        <td>{d.toLocaleDateString() + ' à ' + d.toLocaleTimeString()}</td>
                                        <td>{tea.our_favorite ? <FontAwesomeIcon icon={faHeart} beat style={{color: "#ff0000"}}  aria-hidden="true" /> : <FontAwesomeIcon icon={faXmark} />}</td>
                                        <td><img src={tea.img} alt={tea.imageTitle} /></td>
                                        <td>
                                            <button><FontAwesomeIcon icon={faPenToSquare} aria-hidden="true" /></button>
                                            <button><FontAwesomeIcon icon={faTrashCan} aria-hidden="true" /></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            {Object.keys(key).map((k, i) => {
                                return ((k === "imageTitle") ? <></> : <th key={i}>{k}</th>)
                            })}
                            <th>Actions</th>
                        </tfoot>
                    </table>
                </>}
        </>
    )
}

export default CrudTeas;