import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTruck, faMoneyBill1, faPhone, faCircleCheck } from '@fortawesome/free-solid-svg-icons';


function List() {
    return (
        <ul className="feature">
            <li><FontAwesomeIcon icon={faLock} aria-hidden="true"/>paiement s&eacute;ris&eacute;</li>
            <li><FontAwesomeIcon icon={faTruck} flip="horizontal" aria-hidden="true"/>ma livraison offerte</li>
            <li><FontAwesomeIcon icon={faMoneyBill1} aria-hidden="true"/>carte de fid&eacute;lit&eacute;</li>
            <li><FontAwesomeIcon icon={faPhone} aria-hidden="true"/>service client</li>
            <li><FontAwesomeIcon icon={faCircleCheck} aria-hidden="true"/>garantie qualit&eacute;</li>
        </ul>

    )
}

export default List;