import './CircularRating.css';

const CircularRating = ({ rating = 0, maxRating = 10 }) => {
  // Calculate the percentage based on the rating
  const percentage = (rating / maxRating) * 100;

  // Calculate stroke-dasharray and stroke-dashoffset based on the percentage
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = (rating) => {
    if (rating < 0.5) return { stroke: '#1a1a1a', bg: '#2d2d2d' };
    if (rating < 5) return { stroke: '#D32F2F', bg: '#382e2d' };
    if (rating < 6) return { stroke: '#FFA500', bg: '#3a352d' };
    if (rating < 7) return { stroke: '#ffd700', bg: '#3a382e' };
    return { stroke: '#22d07a', bg: '#282f2a' };
  };

  return (
    <div className="circular-rating">
      <svg viewBox="0 0 100 100">
        <circle
          className="circular-rating__background"
          cx="50"
          cy="50"
          r={radius}
          style={{
            fill: getColor(rating).bg,
          }}
        />
        <circle
          className="circular-rating__progress"
          cx="50"
          cy="50"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            stroke: getColor(rating).stroke,
          }}
        />
      </svg>
      <div className="circular-rating__text">
        {rating ? rating.toFixed(1) : '0'}
      </div>
    </div>
  );
};

export default CircularRating;
