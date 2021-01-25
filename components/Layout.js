import Head from "next/head";
import Link from "next/link";
import { firebase } from "../firebaseClient";
import { useAuth } from "../auth";
import { RiMovie2Line } from "react-icons/ri";
import Router from "next/router";

const Layout = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div>
        <Head>
          <title>Movie Finder</title>
        </Head>
        <div className="flex justify-center items-center bg-white m-auto h-screen">
          <p className="text-black text-2xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Movie Finder</title>
      </Head>
      <div className=" flex justify-between items-center p-10 bg-gray-100 border-b-4 border-red-600">
        <Link href="/dashboard">
          <div className="flex justify-center gap-2 items-center cursor-pointer">
            <RiMovie2Line className="text-5xl text-purple-900" />
            <p className="text-6xl text-purple-400 font-extrabold">
              Movie Finder
            </p>
          </div>
        </Link>
        {user ? (
          <button
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  Router.push("/");
                });
            }}
            className="px-3 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        ) : null}
      </div>
      <div className="bg-gray-700 py-10">{children}</div>
    </div>
  );
};

export default Layout;
