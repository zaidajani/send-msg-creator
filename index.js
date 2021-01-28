const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const routes = require('./routes/routes');
const app = express();

app.set('view engine', 'pug');
app.use('/', routes);
app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});