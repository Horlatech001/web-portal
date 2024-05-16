import express from "express";
import { addPersonalInfo  } from "../controllers/personal.js";

const router = express.Router();

router.post("/applicant/:userId", addPersonalInfo);



export default router