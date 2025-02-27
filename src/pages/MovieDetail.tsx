import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetails = async (id: string) => {
  const { data } = await api.get(`/movie/${id}`);
  return data;
};

const MovieDetail = () => {
  const { id } = useParams();

  const {
    data: movie,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id as string),
    enabled: !!id,
  });

  if (isLoading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bir hata oluştu!</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
