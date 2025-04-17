import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import SwiperImage from "../SwiperImage/SwiperImage";
import SwiperTitle from "../SwiperTitle/SwiperTitle";
import SwiperPlaceholder from "../SwiperPlaceholder/SwiperPlaceholder";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "./SwiperLazy.css";
import { TvShow } from "../../types/TvShow";
import { Movie } from "../../types/Movie";

interface SwiperLazyProps {
  name: string;
  data: (TvShow | Movie)[] | null;
  isLoading: boolean;
  error: string;
}

// Swiper configuration
const getSwiperConfig = () => ({
  modules: [Navigation, Scrollbar, A11y],
  scrollbar: { hide: true },
  loop: false,
  a11y: {
    enabled: true,
  },
  watchSlidesProgress: true,
  navigation: true,
  spaceBetween: 10,
  slidesPerView: 2,
  breakpoints: {
    600: { slidesPerView: 2, spaceBetween: 16 },
    900: { slidesPerView: 3, spaceBetween: 16 },
    1200: { slidesPerView: 4, spaceBetween: 16 },
    1500: { slidesPerView: 5, spaceBetween: 16 },
    2200: { slidesPerView: 6, spaceBetween: 16 },
  },
});

const SwiperLazy = ({ name, data, isLoading, error }: SwiperLazyProps): React.JSX.Element => {
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const isSwiperVisible = useIntersectionObserver(swiperRef);

  return (
    <div ref={swiperRef}>
      <h2>{name}</h2>
      {isSwiperVisible && !isLoading && !error ? (
        <Swiper {...getSwiperConfig()}>
          {data.map((item) => {
            const isMovieItem = "title" in item;
            const isTvItem = "name" in item;

            return (
              <SwiperSlide key={item.id}>
                {({ isVisible }: { isVisible: boolean }) => (
                  <Link
                    to={`/player/${item.id}?media_type=${isMovieItem ? "movie" : "tv"}`}
                    tabIndex={isVisible ? 0 : -1}
                  >
                    <SwiperImage
                      backdrop_path={item.backdrop_path}
                      poster_path={item.poster_path}
                      title={isMovieItem ? item.title : undefined}
                      name={isTvItem ? item.name : undefined}
                    />
                    <SwiperTitle
                      title={isMovieItem ? item.title : undefined}
                      name={isTvItem ? item.name : undefined}
                    />
                  </Link>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <SwiperPlaceholder />
      )}
    </div>
  );
};

export default SwiperLazy;
