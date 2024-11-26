const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Serve static files
const publicPath = path.join(__dirname, 'public');
server.use(express.static(publicPath));

// POST Route for Mad Lib
server.post('/ITC505/lab-7/submit', (req, res) => {
    const { hero, creature, weapon, place, action } = req.body;

    if (!hero || !creature || !weapon || !place || !action) {
        return res.send(`
            <h1>Submission Failed</h1>
            <p>Please fill out all fields.</p>
            <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
        `);
    }

    const madLib = `
        Brave ${hero} ventured into the mystical ${place} armed with their trusty ${weapon}.
        There, they encountered a fierce ${creature} and decided to ${action} it.
        The day ended with ${hero}'s name echoing through history as a legendary hero!
    `;

    res.send(`
        <h1>Your Adventure</h1>
        <p>${madLib}</p>
        <a href="/ITC505/lab-7/index.html">Create Another Adventure</a>
    `);
});

// Start the server
const port = process.argv[2] === 'local' ? 8080 : 80;
server.listen(port, () => console.log(`Ready on localhost:${port}`));
