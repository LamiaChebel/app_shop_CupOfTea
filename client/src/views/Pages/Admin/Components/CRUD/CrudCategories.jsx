import { useEffect, useState } from "react";
// import EditTea from "./Create/EditTea";

import spinner from "../../../../../assets/images/spinner.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function CrudCategories() {

    const [categories, setCategories] = useState([]);
    const [key, setKey] = useState("");

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch(`/api/v1/cupoftea/categories`);
                if (!res.ok) {
                    throw new Error(`status : ${res.status}, message : ${res.statusText}`);
                }
                const results = await res.json();

                setCategories(results.categories);
                setKey(results.categories[0]);
                // console.log(results.categories[0]);
            }
            catch (error) {
                console.log(`Problem to fetch teas`, error);
            }
        }
        fetchCategories();
    }, [])


    return (

        <>
            {(!categories.length && !key.length) < 0 ?
                <figure>
                    <img src={spinner} alt="chargement de la page" />
                    <figcaption>Chargement de la page...</figcaption>
                </figure>
                : <>
                    <h3>Liste des Catégories</h3>

                    <table>
                        < thead >
                            <tr>
                                {Object.keys(key).map((k, i) => {
                                    return ((k === "image_id" || k === "imageTitle") ? <></> : <th key={i}>{k}</th>)
                                })}
                                <th>Actions</th>
                            </tr>
                        </thead >
                        <tbody>
                            {categories.map((category, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{category.id}</td>
                                        <td>{category.title}</td>
                                        <td>{category.description}</td>
                                        <td><img src={category.img} alt={category.imageTitle} /></td>
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

export default CrudCategories;