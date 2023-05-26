import { useEffect, useState } from "react";
// import Editimage from "./Create/EditTea";

import spinner from "../../../../../assets/images/spinner.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function CrudPacksTeas() {

    const [packsTeas, setPacksTeas] = useState([]);
    const [key, setKey] = useState("");

    useEffect(() => {
        async function fetchPacksTeas() {
            try {
                const res = await fetch(`/api/v1/cupoftea/packsteas`);
                if (!res.ok) {
                    throw new Error(`status : ${res.status}, message : ${res.statusText}`);
                }
                const results = await res.json();

                setPacksTeas(results.packsTeas);
                setKey(results.packsTeas[0]);
                // console.log(results.packsTeas[0]);
            }
            catch (error) {
                console.log(`Problem to fetch packsTeas`, error);
            }
        }
        fetchPacksTeas();
    }, [])


    return (

        <>
            {(!packsTeas.length && !key.length) < 0 ?
                <figure>
                    <img src={spinner} alt="chargement de la page" />
                    <figcaption>Chargement de la page...</figcaption>
                </figure>
                : <>
                    <h3>Liste des packagings_teas</h3>

                    <table>
                        < thead >
                            <tr>
                                {Object.keys(key).map((k, i) => {
                                    return <th key={i}>{k}</th>
                                })}
                                <th>Actions</th>
                            </tr>
                        </thead >
                        <tbody>
                            {packsTeas.map((pt, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{pt.packaging_id}</td>
                                        <td>{pt.tea_id}</td>
                                        <td>{pt.ref}</td>
                                        <td>{pt.price}</td>
                                        <td>{pt.stock}</td>
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
                                return <th key={i}>{k}</th>
                            })}
                            <th>Actions</th>
                        </tfoot>
                    </table>
                </>}
        </>
    )
}

export default CrudPacksTeas;