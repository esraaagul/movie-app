import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useMovies } from "../hooks/useMovies";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const searchQuery = useSelector(
    (state: RootState) => state.movies.searchQuery
  );
  const { data: movies, error, isLoading } = useMovies(searchQuery);

  return (
    <div className="p-4">
      <SearchBar />
      {isLoading && <p>Yükleniyor...</p>}
      {error && <p>Bir hata oluştu!</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies?.map(
          (movie: { id: number; poster_path: string; title: string }) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div className="border rounded-lg p-2 hover:shadow-lg transition">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3 className="mt-2 font-bold">{movie.title}</h3>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
