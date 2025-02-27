import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovies = async (query: string) => {
  if (!query) return [];
  const { data } = await api.get("/search/movie", { params: { query } });
  return data.results;
};

export const useMovies = (query: string) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => fetchMovies(query),
    enabled: !!query,
    retry: 2, // Hata durumunda iki kez denesin
  });
};
