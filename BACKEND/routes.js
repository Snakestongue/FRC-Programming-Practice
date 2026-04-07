import {Router} from "express";
import {addTeamNum } from "./store.js"
const router = Router()
router.post("/alert", addTeamNum)
export default router