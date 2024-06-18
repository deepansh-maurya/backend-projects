import mongoose from "mongoose";
import { Qoutes } from "../models/qoute.model.js";
import quotes from "../../utils/qoutes.js";
const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://deepanshmaurya135:YvpxrQCv948BSsu1@cluster0.ntnmbyo.mongodb.net/qoutesDatabase`
    );
    console.log("connected suuceffully");
    // const reponse = await Qoutes.insertMany(quotes);
    // console.log(reponse);
  } catch (error) {
    console.log("error occures while connnecting to the database   " + error);
  }
};

export default connectDb;
