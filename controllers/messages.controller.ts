import messages from "../models/messages.model";

export function getSearchConversations(req, res) {
  messages
    .find({
      $or: [
        { userOne: req.reboot_user.email },
        { userTwo: req.reboot_user.email }
      ]
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}
export function postCreateConversation(req, res) {
  messages
    .create({
      userOne: req.reboot_user.email,
      userTwo: req.body.adEmail,
      message: []
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function getConversationById(req, res) {
  messages
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function postSendMessage(req, res) {
  messages
    .update(
      { _id: req.body.id },
      {
        $push: {
          message: { text: req.body.message, sender: req.reboot_user.email }
        }
      }
    )
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function handleError(err, res) {
  return res.status(400).json(err);
}
