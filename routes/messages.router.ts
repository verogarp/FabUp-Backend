import * as express from "express";
const router = express.Router();

import {
  getSearchConversations,
  postSendMessage,
  getConversationById
} from "../controllers/messages.controller";
import { authenticated } from "../services/auth.service";

router.get("/my-conversations", authenticated, getSearchConversations);
router.get("/:id", getConversationById);
router.post("/send", postSendMessage);

export default router;
