import { Router } from "express";
const router = Router();
import { getQoute } from "../controller/qoute.controller.js";
import { getQouteWithCatgeory } from "../controller/qoute.controller.js";
import { getQouteWithTags } from "../controller/qoute.controller.js";
import { getQouteWithRating } from "../controller/qoute.controller.js";
router.route("/").get(getQoute);
router.route("/with-category").post(getQouteWithCatgeory);
router.route("/with-tags").post(getQouteWithTags);
router.route("/by-ratings").post(getQouteWithRating);
export default router;
