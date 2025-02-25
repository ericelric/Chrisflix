import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import SwiperImage from '../SwiperImage/SwiperImage';
import SwiperPlaceholder from '../SwiperPlaceholder/SwiperPlaceholder';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './SwiperLazy.css';

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

const SwiperLazy = ({ name, data, isLoading, error }) => {
  const swiperRef = useRef(null);
  const isVisible = useIntersectionObserver(swiperRef);

  return (
    <div ref={swiperRef}>
      <h2>{name}</h2>
      {isVisible && !isLoading && !error ? (
        <Swiper {...getSwiperConfig()}>
          {data.map(({ id, backdrop_path, poster_path, title, name }) => (
            <SwiperSlide key={id}>
              <SwiperImage
                backdrop_path={backdrop_path}
                poster_path={poster_path}
                title={title}
                name={name}
              />
              <div className="swiper-slide-text">
                {title || name || 'Media'}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SwiperPlaceholder />
      )}
    </div>
  );
};

export default SwiperLazy;
