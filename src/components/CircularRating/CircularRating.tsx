import "./CircularRating.css";

interface RatingColor {
  stroke: string;
  bg: string;
}

interface CircularRatingProps {
  rating: number;
  maxRating?: number;
}

const CircularRating = ({ rating = 0, maxRating = 10 }: CircularRatingProps): React.JSX.Element => {
  // Calculate the percentage based on the rating
  const percentage = (rating / maxRating) * 100;

  // Calculate stroke-dasharray and stroke-dashoffset based on the percentage
  const radius = 42.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = (rating: number): RatingColor => {
    if (rating < 0.5) return { stroke: "#1a1a1a", bg: "#00000000" };
    if (rating < 5) return { stroke: "#D32F2F", bg: "#5412121a" };
    if (rating < 6) return { stroke: "#FFA500", bg: "#6642001a" };
    if (rating < 7) return { stroke: "#ffd700", bg: "#332b001a" };
    return { stroke: "#22d07a", bg: "#0e58331a" };
  };

  const color = getColor(rating);

  return (
    <div className="circular-rating">
      <svg viewBox="0 0 100 100">
        <circle
          className="circular-rating__background"
          cx="50"
          cy="50"
          r={radius}
          style={{
            fill: color.bg,
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
            stroke: color.stroke,
          }}
        />
      </svg>
      <div className="circular-rating__text">{rating ? rating.toFixed(1) : "0"}</div>
    </div>
  );
};

export default CircularRating;
