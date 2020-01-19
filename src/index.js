const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const creds = require('./creds')

const app = express();

mongoose.connect(`mongodb+srv://${creds.mongodb.username}:${creds.mongodb.password}@cluster0-fhv5g.mongodb.net/omnistack10?retryWrites=true&w=majority`, {
  useNewUrlParser: true, // current URL string parser is deprecated, so use the new one
  useUnifiedTopology: true // current Server Discovery and Monitoring engine is deprecated, so use new one
});

app.use(express.json()) // Tell express how to handle json data
app.use(routes);

app.listen(3333);