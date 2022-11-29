const express  = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/water', (req, res) => {
  console.log(`${req.ip} is asking for water`);
  res.send('Here is some water for you');
});

app.get('/food', (req, res) => {
  console.log(`${req.ip} is asking for food`);
  res.send('Here is some food for you');
})

app.listen(port, () =>{
  console.log(`Expense Tracker backend listening on port ${port}`);
})