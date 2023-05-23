import { Link } from "react-router-dom";

import Nav from "./HeaderComponents/Nav";
import ribbon from "../../assets/images/ribbon.svg";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from "./index.module.css";

function Header() {
    return (
        <header id="mainHeader">
            <p>Livraison offerte &agrave; partir de 65&euro; d&apos;achat !</p>
            <img className="ribbon hidden" src={ribbon} alt="" />

            <div className="mycart">
                <Link to={"/mycart"} className={styles.link}>
                    <p><span className="txt-mycart">Mon panier</span>
                        <FontAwesomeIcon icon={faCartShopping} className= "icon-cart" aria-hidden="true"/>
                        <span>42,00&euro;</span>
                    </p>
                </Link>
            </div>

            <Link to={"/"}>
                <h1><img src={logo} alt="le logo Cup of Tea avec une tasse de thé fumante" /></h1>
            </Link>
            
            <Nav />
        </header>
    )
}

export default Header;