import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pastDateFromRange } from "./helpers/dateFromRange";
import { DateRange, ListResponse, TwitchChannel, TwitchClip } from "./apiTypes";

export interface ClipsQuery {
  range: DateRange;
  channelId: string;
}

export interface QueryArgs<T> {
  query: T;
  token: string;
}

export const twitchApi = createApi({
  reducerPath: "twitchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.twitch.tv/helix/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Client-Id", "oqd2wzwb4af7w65bjf69qlztg6gsta");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchChannels: builder.query<
      ListResponse<TwitchChannel>,
      QueryArgs<string>
    >({
      query: (args) => ({
        url: `search/channels`,
        params: {
          query: args.query,
        },
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
      }),
    }),
    getClips: builder.query<ListResponse<TwitchClip>, QueryArgs<ClipsQuery>>({
      query: (args) => ({
        url: `clips`,
        params: {
          ended_at: new Date().toISOString(),
          started_at: pastDateFromRange(args.query.range),
          broadcaster_id: args.query.channelId,
        },
        headers: {
          Authorization: `Bearer ${args.token}`,
        },
      }),
    }),
  }),
});

export const { useLazySearchChannelsQuery, useGetClipsQuery } = twitchApi;
