$(document).ready(function() {
    console.log('test');
});



const result = $('#search').val();
var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + result + '&format=json&callback=wikiCallback';
