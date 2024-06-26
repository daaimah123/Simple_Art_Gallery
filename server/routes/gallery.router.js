const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// ******** ROUTES at /gallery *********
// ******** DATABASE "gallery_items" *********

// GET Route
router.get('/', (req, res) => {
  console.log('SERVER - GET inside /gallery');

  const sqlQuery = 'SELECT * FROM "gallery_items" ORDER BY "id" ASC';

  pool
    .query(sqlQuery)
    .then((results) => {
      console.log('Retrieving results from "gallery_items"', results);
      res.send(results.rows); 
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); 
    });
}); 

// POST Route
router.post('/', (req, res) => {
  console.log('SERVER - POST inside /gallery');

  const imagePath = req.body.imagePath;
  const imageDescription = req.body.imageDescription;
  const sqlQuery =
    'INSERT INTO "gallery_items" ("path", "description") VALUES ($1, $2)';

  pool
    .query(sqlQuery)
    .then((results, [imagePath, imageDescription]) => {
      console.log('Adding new item into "gallery_items"', results);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); 
    });
}); 

// PUT Route: Update Likes [Increase]
router.put('/like/:id', (req, res) => {
  console.log('SERVER - PUT inside /gallery/like/id');
  console.log('req.params', req.params);

  const galleryItemId = req.params.id;
  const sqlQuery =
    'UPDATE "gallery_items" SET "likes" = "likes" + 1 WHERE "id"=$1';

  pool
    .query(sqlQuery, [galleryItemId])
    .then((result) => {
      console.log('Updated an item from the "gallery_items"', result);
      res.sendStatus(201); 
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); 
    });
}); 

// PUT Route: Update Likes [Decrease]
router.put('/unlike/:id', (req, res) => {
  console.log('SERVER - PUT inside /gallery/unlike/id');
  console.log('req.params', req.params);

  const galleryItemId = req.params.id;
  const sqlQuery =
    'UPDATE "gallery_items" SET "likes" = "likes" - 1 WHERE "id"=$1';

  pool
    .query(sqlQuery, [galleryItemId])
    .then((result) => {
      console.log('Updated an item from the "gallery_items"', result);
      res.sendStatus(201); 
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); 
    });
}); 

router.delete('/:id', (req, res) => {
  console.log('SERVER - DELETE inside /gallery/id');
  console.log('req.params.id', req.params.id);

  const galleryItemId = req.params.id;
  const sqlQuery = 'DELETE FROM "gallery_items" WHERE "id"=$1';

  pool
    .query(sqlQuery, [galleryItemId])
    .then((results) => {
      console.log('Deleting an item from "gallery_items"', results);
      res.sendStatus(200); 
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500); 
    });
});

module.exports = router;