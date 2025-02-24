import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import SwiperPlaceholder from '../SwiperPlaceholder/SwiperPlaceholder';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './LazySwiper.css';

// Swiper configuration
const getSwiperConfig = () => ({
  modules: [Navigation, Scrollbar],
  scrollbar: { hide: true },
  loop: false,
  watchSlidesProgress: true,
  navigation: true,
  spaceBetween: 16,
  slidesPerView: 2,
  breakpoints: {
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
    1500: { slidesPerView: 5 },
    2200: { slidesPerView: 6 },
  },
});

const LazySwiper = ({ name, data, isLoading }) => {
  const swiperRef = useRef(null);
  const isVisible = useIntersectionObserver(swiperRef);

  return (
    <div ref={swiperRef}>
      <h2>{name}</h2>
      {isVisible && !isLoading ? (
        <Swiper {...getSwiperConfig()}>
          {data.map(({ id, backdrop_path, title, name }) => (
            <SwiperSlide key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                alt={`${title || name} Poster`}
                loading="lazy"
              />
              <div className="swiper-slide-text">{title || name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SwiperPlaceholder />
      )}
    </div>
  );
};

export default LazySwiper;
