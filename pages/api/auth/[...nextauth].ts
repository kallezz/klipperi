import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export default NextAuth({
  // Provider configuration
  providers: [
    TwitchProvider({
      name: "Twitch",
      clientId: process.env.TWITCH_CLIENT_ID || "",
      clientSecret: process.env.TWITCH_SECRET || "",
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      user && (token.id = user.id);
      account && (token.accessToken = account.access_token);
      return token;
    },
    session: async ({ session, token, user }) => {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
