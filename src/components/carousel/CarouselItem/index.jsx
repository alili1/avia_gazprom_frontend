import {ArticleCard} from '../../ArticleCard';

const CarouselItemCustom = ({content=[''], width}) => {
    
    return (
        <div className='carousel-item-block' style={{width: width}}>
           <ArticleCard src={content.src} articleText={content.text} data={content.data} urlLink={content.url} />
        </div>
    );
};

export default CarouselItemCustom;