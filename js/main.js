const $ = require('jquery');

const loadData = () => {
  console.log('test');
  return false;
};

$('#form').submit(loadData);

// const result = $('#search').val();
// var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + result + '&format=json&callback=wikiCallback';
