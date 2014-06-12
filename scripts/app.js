window.onload = function() {
  var content = document.getElementById('content');
  content.style.height = (window.innerHeight - 80) + "px";

  var contentInner = document.getElementById('content-inner');
  var innerHTML = '';
  for (var i = 1; i <= 200; i++) {
    innerHTML += i + '<br>';
  }
  contentInner.innerHTML += innerHTML;
};
