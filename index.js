const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const notesRouter = require('./routes/notes');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/notes', notesRouter);


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);