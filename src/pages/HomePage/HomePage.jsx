import useTopRatedMovies from '../../hooks/useTopRatedMovies.js';
import LazySwiper from '../../components/LazySwiper/LazySwiper.jsx';
import './HomePage.css';

const HomePage = () => {
  const { data, isLoading } = useTopRatedMovies();

  return (
    <>
      <div>
        {Array.from({ length: 10 }).map((_, i) => (
          <LazySwiper
            key={i}
            index={i}
            name={'Top Rated Movies'}
            data={data}
            isLoading={isLoading}
          />
        ))}
      </div>
    </>
  );
};
export default HomePage;
