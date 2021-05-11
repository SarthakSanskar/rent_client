import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
// import './index.scss';

const slides = [
    {
      city: 'Paris',
      country: 'France',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: 'Singapore',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      city: 'Prague',
      country: 'Czech Republic',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      city: 'Moscow',
      country: 'Russia',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ];
// class CitiesSlider extends React.Component {
    const HomeSlider = () => {
    // constructor(props) {
    //   super(props);
      
    //   this.IMAGE_PARTS = 4;
      
    //   this.changeTO = null;
    //   this.AUTOCHANGE_TIME = 4000;
      
    //   this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    // }
    var [changeTO, setChangeTo] = useState(null)
    const [IMAGE_PARTS, setIMAGE_PARTS] = useState(4)
    const [AUTOCHANGE_TIME, setAUTOCHANGE_TIME] = useState(4000)
    const [innerState, setInnerState] = useState({ activeSlide: -1, prevSlide: -1, sliderReady: false })



    useEffect(() => {
      window.clearTimeout(changeTO);
    })
    
    useEffect(() => {
      runAutochangeTO();
      setTimeout(() => {
        setInnerState({ activeSlide: 0, sliderReady: true });
      }, 0);
    })
    
    const runAutochangeTO = () => {
      changeTO = setTimeout(() => {
        changeSlides(1);
        runAutochangeTO();
      }, AUTOCHANGE_TIME);
    }
    
    const changeSlides = (change) => {
      window.clearTimeout(changeTO);
      const { length } = slides;
      const prevSlide = innerState.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      setInnerState({ activeSlide, prevSlide });
    }
    console.log(innerState)
      const { activeSlide, prevSlide, sliderReady } = innerState
      return (
        <div className={classNames('slider', { 's--ready': sliderReady })}>
          <p className="slider__top-heading">Travelers</p>
          <div className="slider__slides">
            {slides.map((slide, index) => (
              <div
                className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                key={slide.city}
                >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
                  <h2 className="slider__slide-heading">
                    {slide.city.split('').map(l => <span>{l}</span>)}
                  </h2>
                  <p className="slider__slide-readmore">read more</p>
                </div>
                <div className="slider__slide-parts">
                  {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                        <h1>{x}</h1>
                      <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="slider__control" onClick={() => changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
        </div>
      );
    }
//   }
  
  
  
export default HomeSlider;

  