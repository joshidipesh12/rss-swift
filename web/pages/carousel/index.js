import Carousel from '../../components/Carousel';
import Layout from '../../Layouts/Layout';
import { quad, makeEaseOut } from '../../util/animations';
import carouselData from '../../carouselData.json';
import { EuiText, htmlIdGenerator } from '@elastic/eui';

const AppCarousel = () => {
  return (
    <div>
      <Carousel
        animation={makeEaseOut(quad)}
        gutterSize={1}
        iconDisplay='base'
        initialSlide={2}>
        <Carousel.Slider>
          {carouselData.items.map(item => (
            <Carousel.Slide key={htmlIdGenerator()()}>
              <img src={item.image} alt={item.title} />
              <EuiText
                color='subdued'
                style={{
                  padding: '.1rem 1rem 0 1rem',
                }}>
                <small>
                  <strong>{item.date}</strong>
                </small>
              </EuiText>
              <EuiText
                style={{
                  padding: '.4rem 1rem 0 1rem',
                }}>
                <h5>{item.title}</h5>
              </EuiText>
            </Carousel.Slide>
          ))}
        </Carousel.Slider>
      </Carousel>
    </div>
  );
};

AppCarousel.Layout = Layout;
export default AppCarousel;
