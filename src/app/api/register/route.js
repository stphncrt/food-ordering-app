import mongoose from "mongoose";
import { User } from "../../models/User";

export async function POST(req) {
  const body = await req.json();
  // mongoose.connect(process.env.MONGO_URL);
  mongoose.connect(
    "mongodb+srv://food-ordering:jpMlQQfHyw83f8Cn@cluster0.f4g01vq.mongodb.net/food-ordering"
  );
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
