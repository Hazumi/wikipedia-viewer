const $ = require('jquery');

const app = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom: function() {
    this.$form = $('#form');
  },
  bindEvents: function() {
    this.$form.submit(this.render);
  },
  render: function() {

      

    return false;
  }
};

app.init();

// const result = $('#search').val();
// var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + result + '&format=json&callback=wikiCallback';
