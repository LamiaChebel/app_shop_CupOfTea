import { useState } from "react";

import slider1 from "../../../../assets/images/slider/1.jpg";
import slider2 from "../../../../assets/images/slider/2.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-regular-svg-icons";


function Slider() {

    const imagesSlider = [
        {
            id : 1,
            url : slider1,
        },
        {
            id : 2,
            url : slider2,
        }
    ];

    const [index, setIndex] = useState(0) ;
    function sliderHandlerNext(e){
        e.preventDefault();
        if (index === imagesSlider.length - 1){
            return setIndex(0);
        }
        else {
            return setIndex(index + 1);
        }
    }
    
    function sliderHandlerPrev(e){
        e.preventDefault();
        if (index === 0){
            return setIndex(imagesSlider.length -1);
        } 
        else {
            return setIndex(index - 1);
        }
    }

    return (
        <div className="slider" aria-live="polite">

            <figure id ={imagesSlider[index].id} className="slider-figure is-active">
                <img src={imagesSlider[index].url} alt="" />
            </figure>

            {/* <figure className="slider-figure">
                <img src={slider2} alt="" />
            </figure> */}


            <nav className="slider-nav">

                <button rel="prev" className="slider-nav-button" aria-label="Preview" onClick={sliderHandlerPrev}>
                    <FontAwesomeIcon icon={faCircle} aria-hidden="true" />
                </button>
                <button rel="prev" className="slider-nav-button" aria-label="Next" onClick={sliderHandlerNext}>
                    <FontAwesomeIcon icon={faCircle} aria-hidden="true" />
                </button>
            </nav>

        </div>

    )
}


export default Slider;