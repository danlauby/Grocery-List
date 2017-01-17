$(function() {
  $('#items form').submit(function(e) {
    var items = ['item1', 'item2', 'item3', 'item4'];
    var userInput = [];
    items.forEach(function(item) {
      userInput.push($('input#' + item).val());
    });
    var itemsInOrder = userInput.map(function(item) {
      return item.toUpperCase();
    });
    itemsInOrder.sort();
    itemsInOrder.forEach(function(item) {
      $('.showList ol').append('<li>' + item + '</li>');
    });
    $('#items').toggleClass('hideForm');
    e.preventDefault();
  });
});
