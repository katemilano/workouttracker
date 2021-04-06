// html-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
const path = require('path');
const router = require("express").Router();


// Routes

 
  router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );

  router.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
  );

  router.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/stats.html'))
  );

  module.exports = router;
