const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const gallery = require('./routes/gallery.router.js');
const galleryShowDescription = require('./routes/gallery.show-description.js');
const PORT = process.env.PORT || 3000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));
app.use(cors());

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);
app.use('/gallery/show-desc', galleryShowDescription);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});