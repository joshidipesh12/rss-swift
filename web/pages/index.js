import config from '../public/config.json';
import Layout from '../Layouts/Layout';
import styles from '../styles/Home.module.css';
import Carousel from '../components/Carousel';
import { quad, makeEaseOut } from '../util/animations';
import carouselData from '../carouselData.json';
import { EuiText, htmlIdGenerator } from '@elastic/eui';

export default function Home() {
  const { providers, trending } = config;

  return (
    <main className={styles.main}>
      <section className={styles.carousel_container}>
        <Carousel
          animation={makeEaseOut(quad)}
          gutterSize={1}
          iconDisplay='base'
          initialSlide={2}>
          <Carousel.Slider>
            {carouselData.items.map(item => (
              <Carousel.Slide key={htmlIdGenerator()()}>
                <img
                  className={styles.card_img}
                  src={item.image}
                  alt={item.title}
                />
                <EuiText
                  color='subdued'
                  style={{ padding: '.1rem 1rem 0 1rem' }}>
                  <small>
                    <strong>{item.date}</strong>{' '}
                  </small>
                </EuiText>
                <EuiText style={{ padding: '.4rem 1rem 0 1rem' }}>
                  <h5 className={styles.carousel_card_title}>{item.title}</h5>
                </EuiText>
              </Carousel.Slide>
            ))}
          </Carousel.Slider>
        </Carousel>
      </section>
      <section className={styles.cards_container}>
        <div className={styles.card_list}>
          {providers
            .filter(item => trending.includes(item.name))
            .map(prov => (
              <article key={prov.name} className={styles.card}>
                <img className={styles.card_logo} src={prov.logo} />
                <h1 className={styles.card_header}>{prov.name}</h1>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
Home.Layout = Layout;
