import NextAuth from 'next-auth';
import  GithubProvider from 'next-auth/providers/github';

export default NextAuth(  {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
  pages: {
    signIn: "/auth/SignIn",
    // signOut: "/auth/SignOut",
    // verifyRequest: "/auth/VerifyRequest",
    // newUser: "/auth/NewUser",
  }
});
