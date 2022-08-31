import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import ProfileCard from "../components/profile-card";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="border rounded-xl shadow p-4 w-96 flex flex-col gap-4">
        {session ? (
          <>
            <p>Signed in as {session.user?.name || "No name"}</p>
            <button
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-white transition-all"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <p>Not signed in</p>
            <button
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-white transition-all"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
