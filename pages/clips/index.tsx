import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Layout from "../../components/layout";
import { twitch } from "../../twitch/api";
import { useSession } from "next-auth/react";
import { log } from "util";
import ProfileCard from "../../components/profile-card";
import { AxiosResponse } from "axios";
import { useLazySearchChannelsQuery } from "../../redux/api/twitchApi";

interface TwitchProfile {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  thumbnail_url: string;
  title: string;
  started_at: string;
}

const Clips: NextPage = () => {
  const { data: session } = useSession();
  const [query, setQuery] = useState<string>("");
  const [triggerSearch, { data, error, isLoading }] =
    useLazySearchChannelsQuery();

  useEffect(() => {
    if (query) {
      triggerSearch({
        query,
        token: `${session?.accessToken}`,
      });
    }
  }, [query]);

  return (
    <Layout>
      <input
        className="px-4 py-2 rounded-xl bg-slate-900 text-white border-2 border-twitch-dark focus:border-twitch focus:outline-none"
        type="text"
        placeholder="Search channels..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex flex-wrap justify-center p-4 gap-4">
        {!isLoading &&
          query &&
          data?.data &&
          data.data.map((channel: TwitchProfile) => (
            <ProfileCard
              key={channel.id}
              name={channel.display_name}
              image={channel.thumbnail_url}
              isLive={channel.is_live}
              title={channel.title}
              game={channel.game_name}
              url={channel.broadcaster_login}
              id={channel.id}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Clips;
