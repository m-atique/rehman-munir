import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'

export const authOptions = {
 
  providers: [
    CredentialsProvider({
        
        name: "Credentials",
     
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
        
        const users = await axios.post(`${process.env.NEXTAUTH_URL}/api/users/getUser`,{gmail:credentials.username})
            const user = users.data[0]
          

          if (credentials.password === user.hash)
         {
            return user
          } else {
         
            return null
          }
        }
      })
    
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.role = user.role;
        token.status = user.status;
      }
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      session.user.name = token.name;
      session.user.status = token.status;

      return session;
    }
  },
  pages: {
    signIn: '/auth/signIn',
    signOut: '/auth/signOut',
    error:"/auth/error"
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)