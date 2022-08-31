import axios from "axios";

export const twitch = axios.create({
  baseURL: "https://api.twitch.tv/",
  headers: {
    "Client-Id": process.env.TWITCH_CLIENT_ID || "",
  },
});
