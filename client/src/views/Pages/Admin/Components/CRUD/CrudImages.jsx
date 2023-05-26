import { useEffect, useState } from "react";
// import Editimage from "./Create/EditTea";

import spinner from "../../../../../assets/images/spinner.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function CrudImages() {

    const [images, setImages] = useState([]);
    const [key, setKey] = useState("");

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch(`/api/v1/cupoftea/images`);
                if (!res.ok) {
                    throw new Error(`status : ${res.status}, message : ${res.statusText}`);
                }
                const results = await res.json();

                setImages(results.images);
                setKey(results.images[0]);
                // console.log(results.images[0]);
            }
            catch (error) {
                console.log(`Problem to fetch images`, error);
            }
        }
        fetchImages();
    }, [])


    return (

        <>
            {(!images.length && !key.length) < 0 ?
                <figure>
                    <img src={spinner} alt="chargement de la page" />
                    <figcaption>Chargement de la page...</figcaption>
                </figure>
                : <>
                    <h3>Liste des images</h3>

                    <table>
                        < thead >
                            <tr>
                                {Object.keys(key).map((k, i) => {
                                    return ((k === "imageTitle") ? <></> : <th key={i}>{k}</th>)
                                })}
                                <th>Actions</th>
                            </tr>
                        </thead >
                        <tbody>
                            {images.map((image, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{image.id}</td>
                                        <td>{image.title}</td>
                                        <td><img src={image.img} alt={image.title} /></td>
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

export default CrudImages;