
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers,signIn, auth, signOut  } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
})