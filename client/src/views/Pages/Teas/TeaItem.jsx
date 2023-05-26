import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function TeaItem() {
    // tea + pack + packstea + image + 
    return(
        <main className="tea-item">
            <article>
                <header>
                    <h2></h2>
                    <p><strong></strong></p>
                </header>
                <div className="avis">
                    <img src="" alt="" />
                </div>
                <figure>
                    <figcaption></figcaption>
                    <img src="" alt="" />
                </figure>

                <form action="" methode="get">
                    <select name="" id="" aria-label="sélectionner la pochette en grammes que vous souhaitez">
                        {/* boucle weight à faire */}
                    <option value="">Pochette de </option>

                    </select>
                    <button>ajouter dans votre panier</button>
                    <button><FontAwesomeIcon icon={faHeart}  style={{color: "#ff0000"}}  aria-hidden="true" /> <FontAwesomeIcon icon="fa-solid fa-heart"  style={{color: "#ff0000"}}  aria-hidden="true" />Ajouter dans votre liste d'envies</button>
                </form>
                <div className='textes'>
                <p></p>
                <p></p>
                <p className='bold'>Profitez d&apos;une remise de 5% sur la pochette de 500g (prix d&eacute;j&agrave; remis&eacute;).</p>
                <p className='bold'>Profitez d&apos;une remise de 10% sur le lot de 2 pochettes de 500g (prix d&eacute;j&agrave; remis&eacute;).</p>
                </div>
            </article>
        </main>
    )
}

export default TeaItem;