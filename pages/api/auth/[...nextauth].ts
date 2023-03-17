import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/reddit";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.REDDIT_ID,
      clientSecret: process.env.REDDIT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
