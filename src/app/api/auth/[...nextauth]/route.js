import mongoose from "mongoose";
import { User } from "@/app/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log(credentials);
        mongoose.connect(
          "mongodb+srv://food-ordering:jpMlQQfHyw83f8Cn@cluster0.f4g01vq.mongodb.net/food-ordering"
        );
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        console.log(passwordOk);
        if (passwordOk) {
          console.log(user);
          return user;
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
