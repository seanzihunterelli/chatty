const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(8181);

app.use(express.static('assets'));
app.use(bodyParser.json());

const messages = [{message:"Not right now"}, {message:"Maybe later"}];

app.get('/messages', (req, res) => {
    res.status(200).json({ messages: messages});
});

app.post('/messages', (req, res, next) => {
  messages.push({message:req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
  console.log(req.body);
});
