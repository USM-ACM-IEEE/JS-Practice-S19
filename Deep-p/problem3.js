/*
Problem 3:
Using a for X in/of Y loop, iterate through the following array of objects and console.log the country name and abbreviation for each object.
*/

let antarctica = [{
    "country_name": "Antarctica",
    "country_abbreviation": "AQ",
    "capital": null
}, {
    "country_name": "Bouvet Island",
    "country_abbreviation": "BV",
    "capital": null
}, {
    "country_name": "French Southern territories",
    "country_abbreviation": "TF",
    "capital": null
}, {
    "country_name": "Heard Island and McDonald Islands",
    "country_abbreviation": "HM",
    "capital": null
}, {
    "country_name": "South Georgia and the South Sandwich Islands",
    "country_abbreviation": "GS",
    "capital": null
}];

for (let x of antarctica) {
    console.log(x.country_name);
    console.log(x.country_abbreviation);
}

// for (let i of antarctica) {
//     console.log(i);
// }
