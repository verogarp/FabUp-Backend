import * as express from "express";
const router = express.Router();

import {
  getSearchConversations,
  postSendMessage,
  getConversationById,
  postCreateConversation
} from "../controllers/messages.controller";
import { authenticated } from "../services/auth.service";

router.get("/my-conversations", authenticated, getSearchConversations);
router.post("/newConversation", authenticated, postCreateConversation);
router.post("/send", authenticated, postSendMessage);
router.get("/:id", getConversationById);

export default router;
