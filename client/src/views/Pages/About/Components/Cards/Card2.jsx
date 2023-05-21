import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card2(props) {
    const {icon, legend, src, text} = props ;

    return (
        <div>
            <figure>
                {src ? <img src={src} alt="" /> : <FontAwesomeIcon icon={icon} aria-hidden="true" />}
                    <figurecaption>{legend}</figurecaption>
            </figure>

            <p>{text}
            </p>

        </div>
    )
}

export default Card2;