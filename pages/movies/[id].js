import Link from "next/link";
import Layout from "../../components/Layout";
const MovieDetails = ({ details }) => {
  console.log("Details", details);
  return (
    <Layout>
      <div className="flex h-screen justify-center items-center">
        <div className="flex gap-5 w-6/12 bg-gray-200 p-10 rounded-lg">
          <div className="flex justify-center h-60">
            <img src={details.Poster} width="200px" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-lg text-gray-500">Title</p>
                <p className="text-lg text-blue-500">{details.Title}</p>
              </div>
              <div>
                <p className="text-lg text-gray-500">Language</p>
                <p className="text-lg text-blue-500">{details.Language}</p>
              </div>
              <div>
                <p className="text-lg text-gray-500">Plot</p>
                <p className="text-lg text-blue-500">{details.Plot}</p>
              </div>

              <div>
                <p className="text-lg text-gray-500">Released</p>
                <p className="text-lg text-blue-500">{details.Released}</p>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <Link href="/movies">
                <a className="px-3 py-2 rounded-lg bg-red-600 text-white">
                  Back to movies
                </a>
              </Link>

              <Link href="/">
                <a className="px-3 py-2 rounded-lg bg-yellow-600 text-white">
                  Back to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;

export const getServerSideProps = async ({ params }) => {
  let res = await fetch(
    `https://www.omdbapi.com/?apikey=4a718f1e&i=${params.id}`
  );

  let details = await res.json();
  return {
    props: {
      details: details,
    },
  };
};
