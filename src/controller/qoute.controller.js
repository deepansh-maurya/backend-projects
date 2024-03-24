import { Qoutes } from "../models/qoute.model.js";
export const getQoute = async (req, res) => {
  const quote = await Qoutes.find();
  if (!quote) {
    console.log("error occured");
    res.status(500).json({ error: "error a gaya" });
  } else {
    res.status(200).json(quote);
    console.log(quote);
  }
};
export const getQouteWithCatgeory = async (req, res) => {
  const category = req.body.category;
  console.log(category);
  const qoutes = await Qoutes.find({ category: category }).count();
  if (!qoutes) {
    console.log("error occured");
    res.status(500).json({ error: "error a gaya" });
  } else {
    res.status(200).json(qoutes);
    console.log(qoutes);
  }
};
export const getQouteWithTags = async (req, res) => {
  const tags = req.body.tags;
  console.log(tags);
  const quotes = await Qoutes.find({ tags: { $in: tags } });
  if (!quotes) {
    console.log("error occured");
    res.status(500).json({ error: "error a gaya" });
  } else {
    res.status(200).json(quotes);
    console.log(quotes);
  }
};
export const getQouteWithRating = async (req, res) => {
  const ratings = req.body.ratings;
  console.log(ratings);
  const quotes = await Qoutes.find({ rating: ratings });
  if (!quotes) {
    console.log("error occured");
    res.status(500).json({ error: "error a gaya" });
  } else {
    res.status(200).json(quotes);
    console.log(quotes);
  }
};
