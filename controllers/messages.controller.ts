import messages from "../models/messages.model";

export function getSearchConversations(req, res) {
  messages
    .find({
      $or: [{ userOne: req.params.user }, { userTwo: req.params.user }]
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function postSendMessage(req, res) {
  messages
    .findOneAndUpdate(
      {
        $or: [
          { userOne: req.body.userOne, userTwo: req.body.userTwo },
          { userOne: req.params.userTwo, userTwo: req.params.userOne }
        ]
      },
      {
        userOne: req.params.userOne,
        userTwo: req.params.userTwo,
        $push: { messages: req.body }
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    )
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function handleError(err, res) {
  return res.status(400).json(err);
}
