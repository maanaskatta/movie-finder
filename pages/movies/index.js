import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";

const Movies = ({ movies }) => {
  const [searchMovie, setSearchMovie] = useState(null);

  const findMovies = () => {
    console.log("Movie Name", searchMovie);
  };

  return (
    <Layout>
      <div>
        <div className="p-10">
          <div className="flex justify-center items-center gap-5">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              placeholder="Search movies by Title"
              className="px-3 py-2 bg-gray-100 rounded flex w-1/2 focus:outline-none"
            />

            <button
              onClick={() => findMovies()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 px-10">
          {movies.Search.map((movie) => {
            return (
              <div className="p-5 flex flex-col gap-3 bg-gray-100 rounded-lg">
                <div className="flex justify-center">
                  <img src={movie.Poster} width="250" />
                </div>
                <div>
                  <p className="text-lg text-gray-400 font-normal">Title</p>
                  <p className="text-xl text-blue-500 font-medium">
                    {movie.Title}
                  </p>
                </div>

                <div className="flex justify-end">
                  <Link href={`/movies/${movie.imdbID}`}>
                    <a className="px-3 py-2 bg-yellow-500 text-white rounded-lg">
                      Know More
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Movies;

export async function getStaticProps() {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=4a718f1e&s=Avengers`
  );
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
