/*
Problem 3:
Using a for X in/of Y loop, iterate through the following array of objects and console.log the country name and abbreviation for each object.
*/


let antarctica = [{"country_name":"Antarctica","country_abbreviation":"AQ","capital":null},{"country_name":"Bouvet Island","country_abbreviation":"BV","capital":null},{"country_name":"French Southern territories","country_abbreviation":"TF","capital":null},{"country_name":"Heard Island and McDonald Islands","country_abbreviation":"HM","capital":null},{"country_name":"South Georgia and the South Sandwich Islands","country_abbreviation":"GS","capital":null}];

let x;

  for (x in antarctica){
 console.log("Country: " + antarctica[x].country_name);
 console.log("Abbrev.: " + antarctica[x].country_abbreviation);
}
