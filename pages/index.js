import Link from "next/link";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";

const Index = ({ featuredMovies }) => {
  console.log("Featured Movies", featuredMovies);
  return (
    <Layout>
      <div className="flex justify-end p-10">
        <Link href="/movies">
          <a className="px-3 py-2 bg-purple-600 text-white rounded-lg">
            Find More Movies
          </a>
        </Link>
      </div>

      <div className="flex flex-col gap-10 px-10">
        <div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-medium mx-10 text-white">
              Latest Telugu Movies
            </p>
            <div
              className="flex gap-10 flex-wrap bg-gray-200 p-10 overflow-auto justify-center mx-10"
              style={{ maxHeight: 800 }}
            >
              {featuredMovies.telugu.Search.map((movie) => {
                if (movie.Poster !== "N/A") {
                  return <MovieCard movie={movie} view="home" />;
                }
              })}
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-medium mx-10 text-white">
              Latest Engilsh Movies
            </p>
            <div
              className="flex gap-10 flex-wrap bg-gray-200 p-10 overflow-auto justify-center mx-10"
              style={{ maxHeight: 800 }}
            >
              {featuredMovies.english.Search.map((movie) => {
                if (movie.Poster !== "N/A") {
                  return <MovieCard movie={movie} view="home" />;
                }
              })}
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-medium mx-10 text-white">
              Latest Hindi Movies
            </p>
            <div
              className="flex gap-10 flex-wrap bg-gray-200 p-10 overflow-auto justify-center mx-10"
              style={{ maxHeight: 800 }}
            >
              {featuredMovies.hindi.Search.map((movie) => {
                if (movie.Poster !== "N/A") {
                  return <MovieCard movie={movie} view="home" />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const telugu = await fetch(
    `https://www.omdbapi.com/?apikey=4a718f1e&s=prema`
  );
  const english = await fetch(
    `https://www.omdbapi.com/?apikey=4a718f1e&s=mission%20impossible`
  );
  const hindi = await fetch(`https://www.omdbapi.com/?apikey=4a718f1e&s=ishq`);

  let teluguMovies = await telugu.json();
  let englishMovies = await english.json();
  let hindiMovies = await hindi.json();

  return {
    props: {
      featuredMovies: {
        telugu: teluguMovies,
        english: englishMovies,
        hindi: hindiMovies,
      },
    },
  };
};

export default Index;
