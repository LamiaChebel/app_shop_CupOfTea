import React, { useState, useEffect } from 'react';

import spinner from "../../../../assets/images/spinner.svg";

function DatasList() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        async function fetchDatas(){
          try {
              const res = await fetch("/api/v1/cupoftea");
              if (!res.ok){
                  throw new Error(`status : ${res.status}, message : ${res.statusText}`);
              } 
              const results = await res.json();
              console.log(results.teas);
              setDatas(results);
            //  setDatas(results);
          }
          catch (error) {
              console.log(`Problem to fetch datas`, error);
          }
        }
      fetchDatas();
      }, [])
  
    // return (
    //     <>
    //         {!datas.length === 0 ? (
    //             <p>Chargement de la liste...<br />
    //             <img src={spinner} alt="en attente du chargement de la page" />
    //             </p>)
    //             : (
    //             <>
    //             <section>
    //                 <h2>Liste des thés</h2>
    //                 {datas.teas.map((data) => {
    //                     return (
    //                         <article key={data.teas.id}>
    //                             <h3>{data.teas.title}</h3>

    //                             <h4>{data.teas.subtitle}</h4>

    //                             <p>{data.teas.description}</p>
    //                             <p>{data.teas.story_tea}</p>

    //                             <ul>
    //                                 <li>Créé le : {data.teas.created_at.toLocaleDateString()} à {data.teas.created_at.toLocaleTimeString()}</li>
    //                                 <li>Préféré : {data.teas.our_favorite ? "Oui" : "Non"}</li>
    //                                 <li>Image associé : {!data.teas.image_id ? "Oui" : "Non"}</li>
    //                             </ul>
    //                         </article>
    //                     )
    //                 })}



    //             </section>

    //             {/* Catégories */ }

    //             <section>
    //                 <h2>Liste des catégories</h2>
    //                 {datas.map(data => {
    //                     return (
    //                         <article key={data.id}>
    //                             <h3>{data.categories.title}</h3>

    //                             <p>{data.categories.description}</p>

    //                             <p>Image associé : {!data.categories.image_id ? "Oui" : "Non"}</p>

    //                         </article>
    //                     )}
    //                 )}

    //         </section>

    //         {/* images */}
    //         <section>
    //             <h2>Liste des images</h2>
    //                 {datas.map(data => {
    //                     return (
    //                         <figure key={data.images.id}>
    //                             <img src={data.images.url} alt={data.images.title} />
    //                             <figcaption>{data.images.title}</figcaption>
    //                         </figure>
    //                     )
    //                     })}
                    

    //         </section>

    //         {/* packagings */}
    //         <section>
    //             <h2>Liste des packagings</h2>
    //                 {datas.map(data => {
    //                     return (
    //                         <ul >
    //                             <li key={data.packagings.id}>{data.packagings.weight}</li>
    //                         </ul>
    //                     )
    //                 })}
    //         </section>

    //         {/* packsTeas */}
    //         <section>
    //             <h2>Liste des packagings_teas</h2>
    //                 {datas.map(data => {
    //                     return (
    //                         <ul >
    //                             <li key={data.packagings_teas.id}>packaging_id : {data.packagings_teas.packaging_id}</li>
    //                             <li key={data.packagings_teas.id}>tea_id : {data.packagings_teas.tea_id}</li>
    //                             <li key={data.packagings_teas.id}>ref : {data.packagings_teas.ref}</li>
    //                             <li key={data.packagings_teas.id}>price : {data.packagings_teas.price}</li>
    //                             <li key={data.packagings_teas.id}>stock : {data.packagings_teas.stock}</li>
    //                         </ul>
    //                     )
    //                 })}

    //         </section>
    //         </>)
    //     }            
    //     </>
    // )
}

export default DatasList;