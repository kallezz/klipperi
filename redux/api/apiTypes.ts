// Twitch API structure

export interface TwitchChannel {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  tags_ids: string[];
  thumbnail_url: string;
  title: string;
  started_at: string;
}

export interface TwitchClip {
  id: string;
  url: string;
  embed_url: string;
  broadcaster_id: string;
  broadcaster_name: string;
  creator_id: string;
  creator_name: string;
  video_id: string;
  game_id: string;
  language: string;
  title: string;
  view_count: number;
  created_at: Date;
  thumbnail_url: string;
  duration: number;
  vod_offset: number;
}

// Generic types

export interface ListResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface Pagination {
  cursor: string;
}

export enum DateRange {
  Day,
  Week,
  Month,
  All,
}
