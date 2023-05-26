import { useEffect, useState } from "react";
// import Editimage from "./Create/EditTea";

import spinner from "../../../../../assets/images/spinner.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function CrudPackagings() {

    const [packagings, setPackagings] = useState([]);
    const [key, setKey] = useState("");

    useEffect(() => {
        async function fetchPackagings() {
            try {
                const res = await fetch(`/api/v1/cupoftea/packagings`);
                if (!res.ok) {
                    throw new Error(`status : ${res.status}, message : ${res.statusText}`);
                }
                const results = await res.json();

                setPackagings(results.packagings);
                setKey(results.packagings[0]);
                // console.log(results.packagings[0]);
            }
            catch (error) {
                console.log(`Problem to fetch packagings`, error);
            }
        }
        fetchPackagings();
    }, [])


    return (

        <>
            {(!packagings.length && !key.length) < 0 ?
                <figure>
                    <img src={spinner} alt="chargement de la page" />
                    <figcaption>Chargement de la page...</figcaption>
                </figure>
                : <>
                    <h3>Liste des packagings</h3>

                    <table>
                        < thead >
                            <tr>
                                {Object.keys(key).map((k, i) => {
                                    return  <th key={i}>{k}</th>
                                })}
                                <th>Actions</th>
                            </tr>
                        </thead >
                        <tbody>
                            {packagings.map((packaging, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{packaging.id}</td>
                                        <td>{packaging.weight}</td>
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

export default CrudPackagings;

