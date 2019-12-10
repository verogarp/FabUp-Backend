import * as express from "express";
const router = express.Router();

import {
  getSearchConversations,
  postSendMessage
} from "../controllers/messages.controller";

router.get("/search/:user", getSearchConversations);
router.post("/send", postSendMessage);

export default router;
