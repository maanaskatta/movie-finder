import Router from "next/router";
import Layout from "../components/Layout";
import { useAuth } from "../auth";
import React, { useState } from "react";
import firebase from "firebase";

const Index = () => {
  const { user, isLoading } = useAuth();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLogginIn, setIsLogginIn] = useState(false);

  console.log("Current User", user);

  const handleLogin = async () => {
    setIsLogginIn(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("Current User", user);
        setIsLogginIn(false);
        Router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setIsLogginIn(false);

        alert("Failed to login");
      });
  };

  if (user) {
    Router.push("/dashboard");
    return true;
  } else {
    return (
      <Layout>
        <div className="flex items-center my-28 justify-center">
          <div className="bg-white p-10 flex flex-col gap-5 w-1/2 rounded-lg">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 bg-gray-200 w-full rounded-lg"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 bg-gray-200 w-full rounded-lg"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => handleLogin()}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg"
              >
                <p>{isLogginIn ? "Please Wait" : "Login"}</p>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Index;
