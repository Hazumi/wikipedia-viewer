const $ = require('jquery');

const app = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom: function() {
    this.$form = $('#form');
    this.$search = $('#search');
    this.$links = $('#links');
  },
  bindEvents: function() {
    this.$form.submit(this.renderData);
  },
  renderData: function() {
    let searchInput = app.$search.val();
    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchInput}&format=json&callback=wikiCallback`;
    app.$search.val('');
    $.ajax({
      url: url,
      dataType: 'jsonp',
      type: 'POST',
      success: function(data) {

        console.log(data);

        for (var i = 0; i < data.length; i++) {
          let title = data[1][i];
          let summary = data[2][i].substring(0, 40);
          let link = data[3][i];
        }

      }
    });
    return false;
  }
};

app.init();

// const result = $('#search').val();
// var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + result + '&format=json&callback=wikiCallback';
