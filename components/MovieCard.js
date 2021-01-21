import Link from "next/link";

const MovieCard = ({ movie, view }) => {
  console.log("Movies", movie);
  return (
    <div className="p-5 flex flex-col gap-3 w-96 bg-gray-100 rounded-lg">
      <div className="flex justify-center h-60">
        <img src={movie.Poster} width="250px" />
      </div>
      <div>
        <p className="text-lg text-gray-400 font-normal">Title</p>
        <p className="text-xl text-blue-500 font-medium">{movie.Title}</p>
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
};

export default MovieCard;
