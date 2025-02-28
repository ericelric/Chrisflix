import { useParams, useSearchParams } from 'react-router-dom';
import YouTubePlayer from '../../components/YouTubePlayer/YouTubePlayer';
import PlayerPagePlaceholder from '../../components/PlayerPagePlaceholder/PlayerPagePlaceholder';
import CircularRating from '../../components/CircularRating/CircularRating';
import SwiperLazy from '../../components/SwiperLazy/SwiperLazy.jsx';
import useMediaDetails from '../../hooks/useMediaDetails';
import useSimilarMedia from '../../hooks/useSimilarMedia';
import formatRuntime from '../../../utils/FormatRuntime';
import './PlayerPage.css';

const PlayerPage = () => {
  const { id } = useParams();
  const [urlParams] = useSearchParams();
  const mediaType = urlParams.get('media_type');
  const { data, isLoading, error } = useMediaDetails(mediaType, id);
  const {
    data: similarMedia,
    isLoading: isSimilarLoading,
    error: similarError,
  } = useSimilarMedia(mediaType, id);

  const getReleaseYear = (date) => {
    if (date) {
      return new Date(date).getFullYear();
    }
    return null;
  };

  if (isLoading) {
    return <PlayerPagePlaceholder />;
  }

  if (error) {
    return (
      <div className="player-page__status" aria-live="polite">
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="player-page__status" aria-live="polite">
        No data available.
      </div>
    );
  }

  return (
    <div className="player-page">
      <h1 className="player-page__headline">
        {data.title || data.name}{' '}
        <span className="player-page__release-year">
          ({getReleaseYear(data.release_date || data.first_air_date)})
        </span>
      </h1>

      {data.genres && data.genres.length > 0 && (
        <div className="player-page__genres">
          {data.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}
              {index < data.genres.length - 1 && (
                <span aria-hidden="true">, </span>
              )}
            </span>
          ))}
        </div>
      )}

      <div className="player-page__content">
        <YouTubePlayer
          mediaType={mediaType}
          id={id}
          origin_country={data.origin_country}
        />

        <div className="player-page__info-card">
          <div className="player-page__info-header">
            <div className="player-page__section-title">
              <strong>{data.original_title || data.original_name}</strong> (OT)
            </div>
            <div className="player-page__rating">
              <CircularRating rating={data.vote_average} />
            </div>
          </div>

          <div className="player-page__details">
            <div className="player-page__info-item">
              <strong>Type:</strong>{' '}
              {mediaType === 'movie' ? 'Movie' : 'TV Show'}
            </div>

            {mediaType === 'tv' && (
              <>
                <div className="player-page__info-item">
                  <strong>Seasons:</strong> {data.number_of_seasons}
                </div>
                <div className="player-page__info-item">
                  <strong>Episodes:</strong> {data.number_of_episodes}
                </div>
              </>
            )}

            <div className="player-page__info-item">
              <strong>Runtime:</strong>{' '}
              {formatRuntime(data.runtime || data.episode_run_time)}
            </div>

            <div className="player-page__info-item">
              <strong>Release:</strong>{' '}
              {data.release_date || data.first_air_date}
            </div>

            {data.origin_country && data.origin_country.length > 0 && (
              <div className="player-page__info-item">
                <strong>Origin:</strong> {data.origin_country.join(', ')}
              </div>
            )}

            <div className="player-page__section-title">
              <strong>Description</strong>
            </div>
            <div className="player-page__description">
              {data.overview ? data.overview : 'No description available'}
            </div>
          </div>
        </div>
      </div>

      {similarMedia && similarMedia.length > 0 && (
        <div className="player-page__related">
          <SwiperLazy
            name={'Recommendations'}
            data={similarMedia}
            isLoading={isSimilarLoading}
            error={similarError}
          />
        </div>
      )}
    </div>
  );
};

export default PlayerPage;
