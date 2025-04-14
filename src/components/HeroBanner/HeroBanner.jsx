import { useMemo } from 'react';
import CircularRating from '../CircularRating/CircularRating';
import useTopRatedNewReleases from '../../hooks/useTopRatedNewReleases';
import './HeroBanner.css';
import LinkButton from '../LinkButton/LinkButton';

const HeroBanner = ({ bannerType = 'combined' }) => {
  const { data, isLoading, error } = useTopRatedNewReleases(bannerType);

  const randomItem = useMemo(() => {
    if (!data || data.length === 0) return null;
    return data[Math.floor(Math.random() * data.length)];
  }, [data]);

  if (isLoading)
    return (
      <div className="hero-banner__placeholder">
        <div className="hero-banner__placeholder-image"></div>
        <div className="hero-banner__overlay"></div>
      </div>
    );
  if (error) return;
  if (!randomItem) return;

  return (
    <div className="hero-banner">
      <div className="hero-banner__rating">
        <CircularRating rating={randomItem.vote_average} />
      </div>
      <div className="hero-banner__info">
        <h2 className="hero-banner__title">
          {randomItem.title || randomItem.name}
        </h2>

        <div className="hero-banner__description">{randomItem.overview}</div>
        <LinkButton
          link={`/player/${randomItem.id}?media_type=${
            randomItem.title !== undefined ? 'movie' : 'tv'
          }`}
          icon={true}
        >
          Play Trailer
        </LinkButton>
      </div>

      <div className="hero-banner__overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w1280${
          randomItem.backdrop_path || randomItem.poster_path
        }`}
        alt={`Featured: ${randomItem.title || randomItem.name}`}
        className="hero-banner__image"
      />
    </div>
  );
};

export default HeroBanner;
