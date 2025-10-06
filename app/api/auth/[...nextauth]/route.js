import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider == "github") {
      //connect to the database
      const client = await mongoose.connect();
      //check if the user already exists on the database
      const currentUser = User.findOne({email:email})
      if(!currentUser) {
        const newUser = new User ({
          email:email
        })
        await newUser.save()
      }
    }
  }
}
  
});

export { handler as GET, handler as POST };




// export async function GET(request) {}
 
// export async function HEAD(request) {}
 
// export async function POST(request) {}
 
// export async function PUT(request) {}
 
// export async function DELETE(request) {}
 
// export async function PATCH(request) {}
 
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
// export async function OPTIONS(request) {}