var URL = require('url-parse');
var request = require('request');
var cheerio = require('cheerio');

var keyword = "summit";
var pageNumber = 2;
var pageToVisit = "http://www.shopping.com/appliance/products~PG-"+pageNumber+"?KW="+keyword;
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
    if(error) {
        console.log("Error: " + error);
    }
    // Check status code (200 is HTTP OK)
    if(response.statusCode === 200) {
        // Parse the document body
        var $ = cheerio.load(body);
        console.log("Page title:  " + $('title').text());
        searchForWord($, keyword);
    }
});

function searchForWord($, word) {
    var bodyText = $('.highlight').text();
    bodyText = bodyText.toLowerCase().replace(new RegExp(word, "mg"), word+",");
    var count = bodyText.split(",");
    console.log(count.length);
}