import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useSession } from "next-auth/react";
import { twitch } from "../../twitch/api";
import { AxiosResponse } from "axios";
import TwitchEmbed from "../../components/twitch-embed";
import ThumbnailCarousel from "../../components/thumbnail-carousel";

const UserClips: NextPage = () => {
  const {
    query: { user },
  } = useRouter();
  const { data: session } = useSession();
  const [results, setResults] = useState<any>({});
  const [clipIndex, setClipIndex] = useState<number>(0);
  const [cursor, setCursor] = useState<string>("");

  useEffect(() => {
    // TODO: FIX THIS SHIT

    twitch
      .get("/helix/clips", {
        params: {
          broadcaster_id: user,
          after: clipIndex < 18 ? "" : cursor,
        },
        headers: {
          Authorization: `Bearer ${session?.accessToken}` || "",
        },
      })
      .then(({ data }) => {
        setResults(data);
        setCursor(data.pagination.cursor);
      })
      .catch((error) => console.log(error));
  }, [clipIndex]);

  return (
    <Layout>
      <div>
        {results.data && (
          <TwitchEmbed src={results.data[clipIndex].embed_url} />
        )}
      </div>
      <div className="flex p-4 gap-4">
        <button
          onClick={() => {
            if (!(clipIndex <= 0)) {
              setClipIndex(clipIndex - 1);
            }
          }}
          className="px-4 py-2 rounded-xl bg-twitch hover:bg-twitch-dark text-white transition-all"
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (!(clipIndex >= results.data.length - 1)) {
              setClipIndex(clipIndex + 1);
            }
          }}
          className="px-4 py-2 rounded-xl bg-twitch hover:bg-twitch-dark text-white transition-all"
        >
          Next
        </button>
      </div>
      <ThumbnailCarousel clips={results.data} setClipIndex={setClipIndex} />
    </Layout>
  );
};

export default UserClips;
