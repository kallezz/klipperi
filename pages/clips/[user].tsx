import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useSession } from "next-auth/react";
import { twitch } from "../../twitch/api";
import { AxiosResponse } from "axios";
import TwitchEmbed from "../../components/twitch-embed";

const UserClips: NextPage = () => {
  const {
    query: { user },
  } = useRouter();
  const { data: session } = useSession();
  const [results, setResults] = useState<any>({});

  useEffect(() => {
    twitch
      .get("/helix/clips", {
        params: {
          broadcaster_id: "71092938",
        },
        headers: {
          Authorization: `Bearer ${session?.accessToken}` || "",
        },
      })
      .then(({ data }) => {
        setResults(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout>
      <div>
        {results.data && <TwitchEmbed src={results.data[0].embed_url} />}
      </div>
    </Layout>
  );
};

export default UserClips;
