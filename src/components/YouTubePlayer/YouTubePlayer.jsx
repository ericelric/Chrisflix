import useVideoUrl from '../../hooks/useVideoUrl';
import { PiImage } from 'react-icons/pi';
import './YouTubePlayer.css';

const YouTubePlayer = ({ mediaType, id }) => {
  const { trailer, backdrop, isLoading, error } = useVideoUrl(mediaType, id);

  if (isLoading) {
    return (
      <div className="youtube-player__placeholder youtube-player__placeholder--loading"></div>
    );
  }

  if (error) {
    return <div className="youtube-player__placeholder">Error: {error}</div>;
  }

  if (!trailer) {
    return (
      <div className="youtube-player__placeholder">
        {backdrop ? (
          <img
            src={`https://image.tmdb.org/t/p/w1280${backdrop}`}
            alt="Backdrop"
            className="youtube-player__backdrop"
          />
        ) : (
          <PiImage size={48} />
        )}
      </div>
    );
  }

  return (
    <div className="youtube-player__wrapper">
      <iframe
        className="youtube-player__iframe"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
        title={trailer.name}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;
