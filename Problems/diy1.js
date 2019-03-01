
/*

DIY Bonus Problem!

Take the response from the following get request ( stored in infoObj ) and output the current day of the week.
Hint: You may need to console.log the content of infoObj first!!!

*/

// Ignore this stuff --------------------------------

const http = require("http");
const EventEmitter = require('events');

class fgetEmitter extends EventEmitter {};

const getEvent = new fgetEmitter();
//let gitdata = Buffer.from("");
let rawData = '';
let infoObj = {};

http.get('http://worldclockapi.com/api/json/utc/now', (res) => {
    //console.log('statusCode:', res.statusCode);
    //console.log('headers:', res.headers);

    if (res.statusCode < 200 || res.statusCode > 299) {
        console.log(`ERR! ${res.statusCode} Get request failed!`);
        throw `Get ERROR`;
    }

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        rawData += chunk;
    });

}).on('error', (e) => {
    if (e.errno === 'ENOTFOUND') {
        console.log(`\x1b[31m\x1b[1mThere was an error connecting to github, please check your connection.\x1b[0m`);
    }
    console.error(e);
    throw e;

}).on('close', () => {
    console.log("\x1b[32mEnded Time Get\x1b[0m");
    infoObj = JSON.parse(rawData);
    getEvent.emit('Done');
});
// ----------------------------------------------------

getEvent.on('Done', () => {
    console.log('Hello World!');
/*
--------------------------------
    Your Code Goes Here
--------------------------------
*/
})
