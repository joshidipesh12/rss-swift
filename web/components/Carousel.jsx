import { EuiButtonIcon } from '@elastic/eui';
import React, { useEffect, useRef, useState } from 'react';
import animate, { linear } from '../util/animations';
import styles from '../styles/carousel.module.css';

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

    cards.current[currentCard].classList.remove(styles.card_active);
    cards.current[currentCard - 1].classList.add(styles.card_active);
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

    cards.current[currentCard].classList.remove(styles.card_active);
    cards.current[currentCard + 1].classList.add(styles.card_active);
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
    cards.current[slide].classList.add(styles.card_active);
  }, []);

  return (
    <div className={styles.container}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          setRef,
          ref: slider,
        }),
      )}
      <div className={styles.controls}>
        <EuiButtonIcon
          size='m'
          iconType='arrowLeft'
          className={styles.left_btn}
          display={iconDisplay || 'empty'}
          onClick={e => leftClick(e)}
          aria-label='previous slide'
          style={{ borderRadius: '100%' }}
        />
        <EuiButtonIcon
          size='m'
          iconType='arrowRight'
          className={styles.right_btn}
          display={iconDisplay || 'empty'}
          onClick={e => rightClick(e)}
          aria-label='next slide'
          style={{ borderRadius: '100%' }}
        />
      </div>
    </div>
  );
};

const CarouselSlider = ({ children, setRef }, ref) => {
  return (
    <article className={styles.slider} ref={ref}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { ref: ref => setRef(ref, i) }),
      )}
    </article>
  );
};

const CarouselSlide = ({ children }, ref) => {
  return (
    <section className={styles.card} ref={ref}>
      {children}
    </section>
  );
};

Carousel.Slider = React.forwardRef(CarouselSlider);
Carousel.Slide = React.forwardRef(CarouselSlide);

export default Carousel;
