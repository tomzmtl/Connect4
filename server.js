const express = require('express')
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;


app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!')
});
