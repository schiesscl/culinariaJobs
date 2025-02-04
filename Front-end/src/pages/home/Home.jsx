import './HomeStyle.css';
import Button from 'react-bootstrap/Button';
import Footer from '../../shared/footer/Footer';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'slide1.webp',
    altText: 'Slide 1',
    caption: 'Conectando Talento con Oportunidades',
    subCaption: 'Si estás buscando empleo en el sector gastronómico o si estás estudiando gastronomía y quieres adquirir experiencia en tu primer trabajo, este es tu sitio. En CulinariaJobs conectamos talento con oportunidades.',
    key: 1,
  },
  {
    src: 'slide2.webp',
    altText: 'Slide 2',
    caption: 'Empresas Gastronómicas a Tu Alcance',
    subCaption: 'Más de 50 empresas del rubro gastronómico, incluyendo restaurantes, bares y hoteles, publican sus vacantes en nuestra plataforma. Postularte es fácil: crea tu perfil, carga tu formación, experiencia y datos de contacto, y aplica a las oportunidades que mejor se adapten a ti.',
    key: 2,
  },
  {
    src: 'slide3.webp',
    altText: 'Slide 3',
    caption: 'Avanza en Tu Carrera Gastronómica',
    subCaption: '¡No dejes pasar la oportunidad de avanzar en tu carrera gastronómica!',
    key: 3,
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} className="d-block w-100" />
        <CarouselCaption
          className="text-dark"
          captionText={item.subCaption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="container d-flex flex-column min-vh-100">
      <figure className="logoContainer">
        <img src="/Logo.svg" alt="Logo" />
      </figure>
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <div className="carouselContainer">
        <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
        </style>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            fade={true}
            slide={false} // Desactiva el deslizamiento-
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
        <div className="homeBotContainer d-flex justify-content-around w-100">
          <Button variant="dark" href="/login">Ingresar</Button>
          <Button variant="dark" href="/register">Registrarse</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;