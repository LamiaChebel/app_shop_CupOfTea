import slider1 from "../../../../assets/images/slider/1.jpg";
import slider2 from "../../../../assets/images/slider/2.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";


function Slider() {

    const [slider, setSlider] = useState( slider1) ;

    function sliderHandler(e){
        e.preventDefault();
        console.log(e.target);
        return setSlider(slider);
    }
    
    return (
        <div className="slider" aria-live="polite">

            <figure className="slider-figure is-active">
                <img src={slider} alt="" />
            </figure>

            <figure className="slider-figure">
                <img src={slider2} alt="" />
            </figure>


            <nav className="slider-nav">

                <button rel="prev" className="slider-nav-button" aria-label="Preview" onClick={sliderHandler}>
                    <FontAwesomeIcon icon={faCircle} aria-hidden="true" />
                </button>
                <button rel="prev" className="slider-nav-button" aria-label="Next" onClick={sliderHandler}>
                    <FontAwesomeIcon icon={faCircle} aria-hidden="true" />
                </button>
            </nav>

        </div>

    )
}


export default Slider;