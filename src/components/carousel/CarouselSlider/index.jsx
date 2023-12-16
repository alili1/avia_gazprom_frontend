import CarouselItemCustom from "../CarouselItem";

const CarouselSlider = ({carouselItemContent = []}) => {
    
    return (
        <div className='carousel-slider-block'>
            {carouselItemContent.map((item, i) => (
                <CarouselItemCustom key={i} content={item.content} width={item.width}/>
            ))}
        </div>
    );
};

export default CarouselSlider;