import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export default NextAuth({
  // Provider configuration
  providers: [
    TwitchProvider({
      name: "Twitch",
      clientId: "oqd2wzwb4af7w65bjf69qlztg6gsta",
      clientSecret: "0d5qb28obirdjf9tnvxjiicv8d9xuj",
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
