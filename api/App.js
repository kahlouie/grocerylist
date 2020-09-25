const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());

// place holder for the data
const items = [];

app.get('/api/list', (req, res) => {
  console.log('api/list called!!!!')
  res.json(items);
});

app.post('/api/add-item', (req, res) => {
  const item = req.body.item;
  console.log('Adding item::::::::', item);
  items.push(item);
  res.json("list updated");
});

app.listen(3080, function(err){
    if (err) console.log(err);
    console.log(`Server listening on the port::3080`);
});
