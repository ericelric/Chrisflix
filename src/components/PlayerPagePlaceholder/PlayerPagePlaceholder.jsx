import './PlayerPagePlaceholder.css';

const PlayerPagePlaceholder = () => {
  return (
    <div className="player-page-placeholder">
      <div className="player-page-placeholder__headline"></div>
      <div className="player-page-placeholder__genres"></div>
      <div className="player-page-placeholder__content">
        <div className="player-page-placeholder__player"></div>
        <div className="player-page-placeholder__info"></div>
      </div>
    </div>
  );
};

export default PlayerPagePlaceholder;
