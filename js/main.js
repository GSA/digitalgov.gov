(function(window) {
  document.body.addEventListener('click', function(e) {
    if (e.target.matches('aside h3 span')) {
      var downloadEl = document.querySelector('#downloads');
      if (downloadEl.matches('.open')) {
        return downloadEl.classList.remove('open');
      }
      return downloadEl.classList.add('open');
    }
  });
})(window);
