import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/',
    newUser: '/register'
  },
  providers: [

    Credentials({
      async authorize(credentials) {
        const { callbackUrl, ...rest } = credentials
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(2) })
          .safeParse(rest)

          if(!parsedCredentials.success) return null

          const { email, password } = parsedCredentials.data

          console.log("Auth config")
          console.log({ email, password })


          return { email, password }

          // return null

      },
    }),

  ]
};

export const { signIn, signOut } = NextAuth(authConfig)