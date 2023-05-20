import { Link } from "react-router-dom";

import Nav from "./HeaderComponents/Nav";
import ribbon from "../../assets/images/ribbon.svg";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header id="mainHeader">
            <p>Livraison offerte &agrave; partir de 65&euro; d&apos;achat !</p>
            <img src={ribbon} alt="" />

            <Link to={"/"}>
                <h1><img src={logo} alt="le logo Cup of Tea avec une tasse de thé fumante" /></h1>
            </Link>

            <div className="mycart">
                <Link to={"/mycart"}>
                    <p>Mon panier
                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true"/>
                        <span>42,00&euro;</span>
                    </p>
                </Link>
            </div>
            
            <Nav/>
        </header>
    )
}

export default Header;