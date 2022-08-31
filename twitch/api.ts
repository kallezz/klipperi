import axios from "axios";

export const twitch = axios.create({
  baseURL: "https://api.twitch.tv/",
  headers: {
    "Client-Id": "oqd2wzwb4af7w65bjf69qlztg6gsta",
  },
});
