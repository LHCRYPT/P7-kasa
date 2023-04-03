import React, { component, useEffect, useState } from 'react'; 
import styles from "./Carousel.css";
import flecheHaut from "../fleche-haut.png";
import flecheBas from "../fleche-bas.png";
import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide} from "@splidejs/react-splide";

const options: Options = {
    perPage: 2,
    arrows: false,
    pagination: false,
};

const slides = [
    { icon: "build", text: "Building...",},
    ...
];

export const Carousel = () => (
    <div className="wrapper">
          <div className="splide">
            <Splide options={options}>
                {slides.map((slide)) =>(
                    <SplideSlide>
                       <div className="slide">
                           <div className="card">
                               <span>
                                {slide.icon}
                                </span>
                                <p>{slide.text</p>
                            </div>    
                        </div>  
                        </SplideSlide>
                ))}
         
            </Splide>
            </div> 
        </div> 
        );