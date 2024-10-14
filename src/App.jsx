import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import MovieList from "./components/MovieList/MovieList";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import { MovieProvider } from "./context/MovieProvide";

function App() {
  const [movie, setMovie] = useState([]);
  const [movierate, setMovieRate] = useState([]);
  const [movieSearch, setmovieSearch] = useState("");

  const handleSearch = async (searchVal) => {
    setmovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setmovieSearch(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fecthMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi-US&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fecthMovie();
  }, []);

  return (
    <>
      <MovieProvider>
        <div className="bg-black pb-10">
          <Header onSearch={handleSearch} />
          <Banner />

          {movieSearch.length > 0 ? (
            <SearchMovie title={"tìm kiếm kết quả"} data={movieSearch} />
          ) : (
            <>
              <MovieList title={"Phim Hot"} data={movie} />
              <MovieList title={"Phim Mới"} data={movierate} />
            </>
          )}
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
