import {Router} from "express";
import {addTeamNum } from "./TeamNumber/store.js"
import {createSuggest} from "./Suggestions/suggest.js"
const router = Router()
router.post("/alert", addTeamNum)
router.post("/suggest", createSuggest)
export default router