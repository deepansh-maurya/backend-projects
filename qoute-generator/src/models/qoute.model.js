import mongoose from "mongoose";
import { Schema } from "mongoose";
const qouteSchema = new Schema(
  {
    quote: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    rating: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Qoutes = new mongoose.model("Qoutes", qouteSchema);
