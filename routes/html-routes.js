// html-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
 
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );

  app.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
  );

  app.get('/dashboard', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/stats.html'))
  );
};
