import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs';

export const authConfig: NextAuthConfig = {
  trustHost: true,
  pages: {
    signIn: '/',
    newUser: '/register'
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // const isLoggedIn = !!auth?.user;

      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/dashboard', nextUrl));
      // }
      return true;
    },

    jwt({ token, user }) {
      if ( user ) {
        token.data = user;
      }

      return token;
    },

    session({ session, token, user }) {
      session.user = token.data as any;
      return session;
    },


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

          // Buscar el correo
          const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
          if ( !user ) return null;

          // Comparar las contraseñas
          if( !bcryptjs.compareSync( password, user.password ) ) return null;


          // Regresar el usuario sin el password
          const { password: _, ...restUser } = user;

          return restUser;

          // return null

      },
      
    }),

  ]
};

export const { signIn, signOut, auth } = NextAuth(authConfig)