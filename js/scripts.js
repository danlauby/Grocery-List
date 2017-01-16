$(function() {
  $('#items form').submit(function(e) {
    var items = ['item1', 'item2', 'item3', 'item4'];
    

    newItems.forEach(function(item) {
      var userInput = $('input#' + item).val();
      $('.' + item).text(userInput);
    });
     $('#items').toggleClass('hideForm');
    e.preventDefault();
  });
});
