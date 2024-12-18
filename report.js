const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/38882458-6af11688-3187-4fa1-88a9-d85d14fdfa85?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    //environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});