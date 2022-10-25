import { EuiButtonIcon } from '@elastic/eui';
import React, { useEffect, useRef, useState } from 'react';
import animate, { linear } from '../util/animations';

const Carousel = ({
  children,
  animation,
  gutterSize,
  iconDisplay,
  initialSlide,
}) => {
  const [config, setConfig] = useState({});
  const slider = useRef(null);
  const cards = useRef([]);
  const timing = animation || linear;
  const [currentCard, setCurrentCard] = useState(0);

  const setRef = (ref, i) => {
    cards.current[i] = ref;
  };

  const leftClick = event => {
    event.preventDefault();

    const { limit, speed } = config;

    if (currentCard - 1 < 0) {
      setPosition(limit);
      return;
    }

    const from = slider.current.offsetLeft;
    animate({
      timing,
      duration: 700,
      draw: progress => setPosition(from + progress * speed),
    });

    setPosition(from + speed);

    cards.current[currentCard].classList.remove('card-active');
    cards.current[currentCard - 1].classList.add('card-active');
    setCurrentCard(card => card - 1);
  };

  const rightClick = event => {
    event.preventDefault();

    const { speed, rightLimit } = config;
    if (currentCard + 1 >= cards.current.length) {
      setPosition(rightLimit);
      return;
    }

    const from = slider.current.offsetLeft;
    animate({
      timing,
      duration: 700,
      draw: progress => setPosition(from - progress * speed),
    });

    cards.current[currentCard].classList.remove('card-active');
    cards.current[currentCard + 1].classList.add('card-active');
    setCurrentCard(card => card + 1);
  };

  const setPosition = position => {
    slider.current.style.left = `${position}px`;
  };

  useEffect(() => {
    const gutter =
      (gutterSize || 1) *
      parseInt(
        window.getComputedStyle(document.getElementsByTagName('html')[0])
          .fontSize,
      );
    const slideWidth = cards.current[currentCard].offsetWidth;
    const limit = (window.innerWidth - slideWidth) / 2;
    const rightLimit =
      limit + slideWidth - cards.current.length * (gutter + slideWidth);
    const speed = slideWidth + gutter;

    setConfig(config => ({
      ...config,
      rightLimit,
      limit,
      speed,
    }));

    const slide =
      initialSlide && initialSlide < cards.current.length ? initialSlide : 0;

    setCurrentCard(slide);
    setPosition(limit - slide * speed);
    cards.current[slide].classList.add('card-active');
  }, []);

  return (
    <div id='container'>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          setRef,
          ref: slider,
        }),
      )}
      <div id='controls'>
        <EuiButtonIcon
          size='m'
          iconType='arrowLeft'
          id='left-btn'
          display={iconDisplay || 'empty'}
          onClick={e => leftClick(e)}
          aria-label='previous slide'
          style={{ borderRadius: '100%' }}
        />
        <EuiButtonIcon
          size='m'
          iconType='arrowRight'
          id='right-btn'
          display={iconDisplay || 'empty'}
          onClick={e => rightClick(e)}
          aria-label='next slide'
          style={{ borderRadius: '100%' }}
        />
      </div>
    </div>
  );
};

Carousel.Slider = React.forwardRef(({ children, setRef }, ref) => {
  return (
    <div id='slider' ref={ref}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { ref: ref => setRef(ref, i) }),
      )}
    </div>
  );
});

Carousel.Slide = React.forwardRef(({ children }, ref) => {
  return (
    <div className='card' ref={ref}>
      {children}
    </div>
  );
});

export default Carousel;
