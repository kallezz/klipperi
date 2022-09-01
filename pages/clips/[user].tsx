import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useSession } from "next-auth/react";
import TwitchEmbed from "../../components/twitch-embed";
import ThumbnailCarousel from "../../components/thumbnail-carousel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useGetClipsQuery } from "../../redux/api/twitchApi";
import { DateRange } from "../../redux/api/apiTypes";
import { setCurrentClip } from "../../redux/features/clips/clipsSlice";

const UserClips: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    query: { user },
  } = useRouter();
  const { data: session } = useSession();
  const clip = useSelector((state: RootState) => state.clips.current);
  const { data, error, isLoading } = useGetClipsQuery({
    query: {
      range: DateRange.Week,
      channelId: `${user}`,
    },
    token: `${session?.accessToken}`,
  });
  const [clipIndex, setClipIndex] = useState<number>(0);

  useEffect(() => {
    if (!isLoading && data?.data) {
      dispatch(setCurrentClip(data?.data[clipIndex]));
    }
  }, [isLoading, clipIndex]);

  return (
    <Layout>
      <div>{!isLoading && clip && <TwitchEmbed src={clip.embed_url} />}</div>
      {/* TODO: Fix these F'n buttons */}
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
            if (!(clipIndex >= data?.data.length - 1)) {
              setClipIndex(clipIndex + 1);
            }
          }}
          className="px-4 py-2 rounded-xl bg-twitch hover:bg-twitch-dark text-white transition-all"
        >
          Next
        </button>
      </div>
      <>
        {!isLoading && data?.data && (
          <ThumbnailCarousel clips={data.data} setClipIndex={setClipIndex} />
        )}
      </>
    </Layout>
  );
};

export default UserClips;
