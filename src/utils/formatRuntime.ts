const formatRuntime = (minutes: number | null): string => {
  if (!minutes || minutes <= 0) return "Unknown";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return minutes < 60 ? `${mins}min` : `${hours}h ${mins}min`;
};

export default formatRuntime;
