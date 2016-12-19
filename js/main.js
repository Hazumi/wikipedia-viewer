const $ = require('jquery');

$(document).ready(function() {

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
      app.$links.html('');
      app.$search.val('');
      $.ajax({
        url: url,
        dataType: 'jsonp',
        type: 'POST',
        success: data => {
          for (let i = 0; i < data[1].length; i++) {
            let title = data[1][i];
            let summary = data[2][i];
            let link = data[3][i];
            app.$links.append(`<li><strong><a href="${link}" target='_blank'>${title}</strong><p>${summary}</p></a></li>`);
          }
        }
      });
      return false;
    }
  };

  app.init();
});
