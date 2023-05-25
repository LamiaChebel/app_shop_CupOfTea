import { useEffect, useState } from "react";
// import EditTea from "./Create/EditTea";

function CrudTeas() {

    const[teas, setTeas] = useState([]);

    useEffect(() => {
        async function fetchTeas(){
          try {
              const res = await fetch("/api/v1/cupoftea/teas");
              if (!res.ok){
                  throw new Error(`status : ${res.status}, message : ${res.statusText}`);
              } 
              const results = await res.json();
              console.log(results.teas);
              setTeas(results.teas);
            //  setTeas(results);
          }
          catch (error) {
              console.log(`Problem to fetch Teas`, error);
          }
        }
      fetchTeas();
      }, [])

    return (
        <>
        {/* <EditTea /> */ }

        < thead >
            <th>id</th>
            <th>image</th>
            <th>title</th>
            <th>subtitle</th>
            <th>description</th>
            <th>story_tea</th>
            <th>created_at</th>
            <th>our_favorite</th>
        </thead >
        <tbody>
            <td>
                {teas.map((tea,i) => {return(
                <tr key={i}>{tea.id}</tr>
                )})}
            </td>
            <td>
                {teas.map((tea,i) => {return(
                <tr key={i}>{tea.id}</tr>
                )})}
            </td>
            <td>
                {teas.map((tea,i) => {return(
                <tr key={i}>{tea.title}</tr>
                )})}
            </td>
            <td>
                {teas.map((tea,i) => {return(
                <tr key={i}>{tea.subtitle}</tr>
                )})}
            </td>
            <td>
                {teas.map((tea,i) => {return(
                <tr key={i}>{tea.description}</tr>
                )})}
            </td>
            <td>
                {teas.map((tea,i) => {return(
                <tr key={i}>{tea.story_tea}</tr>
                )})}
            </td>
            <td>
                {teas.map((tea,i) => {
                    let d = new Date(tea.created_at);
                    return(
                <tr key={i}>{d.toLocaleDateString() + ' à ' + d.toLocaleTimeString()}</tr>
                )})}
            </td>
            <td>
                {teas.map((tea,i) => {
                    return(
                <tr key={i}>{tea.our_favorite ? "Coup de coeur" : "Non"}</tr>
                )})}
            </td>
        </tbody>
        <tfoot>
            <th></th>        
        </tfoot>       
        </>
    )
}

export default CrudTeas;