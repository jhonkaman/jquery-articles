// main.js

$('a').on('click', function(e) {
  e.preventDefault();
  let path = $(this).attr('href');
  // $('#container').load(path);
  path = path.substring(9, path.lastIndexOf('.'));
  window.location.hash = path;
});

function handleHashChange() {
  var hash = window.location.hash.substr(1); // Remove the '#' symbol
  if (hash == '#' || hash =='') {
    $('#container').empty();
  } else {
    $('#container').load('articles/' + hash + '.html');
  }
}

// Initial handling of the hash
handleHashChange();

// Listen for hash changes
$(window).on("hashchange", function() {
    handleHashChange();
});
