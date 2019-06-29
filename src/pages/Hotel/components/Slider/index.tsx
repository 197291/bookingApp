import React from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { styles } from './styles';

const slides = [
  'https://r-cf.bstatic.com/images/hotel/max1280x900/191/191281157.jpg',
  'https://q-cf.bstatic.com/images/hotel/max1280x900/191/191281401.jpg',
  'https://q-cf.bstatic.com/images/hotel/max1280x900/133/133069836.jpg',
  'https://q-cf.bstatic.com/images/hotel/max1280x900/175/175750576.jpg',
  'https://q-cf.bstatic.com/images/hotel/max1280x900/129/129747614.jpg',
  'https://r-cf.bstatic.com/images/hotel/max1280x900/133/133069842.jpg',
  'https://r-cf.bstatic.com/images/hotel/max1280x900/174/174360707.jpg',
  'https://q-cf.bstatic.com/images/hotel/max1280x900/133/133069836.jpg',
  'https://r-cf.bstatic.com/images/hotel/max1280x900/129/129747657.jpg',
  'https://r-cf.bstatic.com/images/hotel/max1280x900/175/175748600.jpg',
  'https://r-cf.bstatic.com/images/hotel/max1280x900/154/15499749.jpg',
  'https://r-cf.bstatic.com/images/hotel/max1280x900/175/175747114.jpg'
];
interface Props extends CarouselProps {}

const Slider: React.FC<Partial<Props>> = (props) => {
  const classes = styles(props);
  return (
    <div className={'Slider ' + classes.root}>
      <Carousel {...props}>
        {slides.map((url) => (
          <div key={url}>
            <img alt="Room" src={url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
