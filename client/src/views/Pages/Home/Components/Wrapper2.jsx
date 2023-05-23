import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Wrapper2() {

    const [category, setCategory] = useState("");

    return (
        <section className="category-menu">

            <h3><span className="middle_border"></span>Choisissez votre th&eacute;</h3>

            <nav>
                {}
                <NavLink to={"/categories"}
                    className="hover">
                    <img src="" alt="" />

                </NavLink>

            </nav>


        </section>

    )
}

export default Wrapper2;