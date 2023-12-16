import * as React from 'react'
import {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import CarouselSlider from '../CarouselSlider';
import './Carousel.scss';

const CarouselElement = ({sliderModified=[], itemInSliderNumber}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const moveValue = (itemInSliderNumber/sliderModified.length).toFixed();
    const maxItemIndex = itemInSliderNumber-moveValue+1;

    const updateIndex = (newIndex) => {
       
        if(newIndex < 0) {
            newIndex = maxItemIndex-1;
        } 
        else if (newIndex >= maxItemIndex) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
            updateIndex(activeIndex + 1);
        }, 5000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    })

    let activeIndexProp = 'translateX(-' + activeIndex * 100/moveValue + '%)';
    let showStyle = {transform: activeIndexProp};

    return (
        <div>
            <div className='carousel-block' onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                <div className='inner-block' style={showStyle}>
                    {sliderModified.map((element, i) => {
                            return <CarouselSlider key={i} carouselItemContent={element}/>
                        })}
                </div>
            </div>
            <div className='indicators'>
                    <div className='indicators-button'
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        <AiOutlineArrowLeft/>
                    </div>
                    <div className='indicators-button'
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        <AiOutlineArrowRight/>
                    </div>
                </div>
        </div>
    )
};

export default CarouselElement;