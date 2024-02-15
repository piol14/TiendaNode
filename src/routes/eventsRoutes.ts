import { Router } from "express";
import { getEvents } from "../controllers/eventCtrl.js";

export const eventRouter = Router();
eventRouter.get('/events', getEvents);