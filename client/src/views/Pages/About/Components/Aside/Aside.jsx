import Card2 from "../Cards/Card2";

import { faFaceLaughBeam, faHeart } from '@fortawesome/free-solid-svg-icons';
import teapot from "../../../../../assets/images/teapot.png";

function Aside() {
    return (
        <aside>
            <Card2 legend="Lorem ipsum"
            src={teapot} 
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in voluptas rerum illum officiis doloremque consequuntur, quasi amet odio fuga mollitia maxime ea quam sed voluptate cumque, minima numquam nemo qui ad est assumenda!" />

            <Card2 legend="Dolor sit"
            icon={faHeart} 
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in voluptas rerum illum officiis doloremque consequuntur, quasi amet odio fuga mollitia maxime ea quam sed voluptate cumque, minima numquam nemo qui ad est assumenda!" />

            <Card2 legend="Amet"
            icon={faFaceLaughBeam} 
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in voluptas rerum illum officiis doloremque consequuntur, quasi amet odio fuga mollitia maxime ea quam sed voluptate cumque, minima numquam nemo qui ad est assumenda!" />
        </aside>
    )
}

export default Aside;