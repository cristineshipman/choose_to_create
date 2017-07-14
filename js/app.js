
$(function(){
  var arr = [
    "Today it really rained cats and dogs..",
    "Your attic leads to another world. Describe the world.",
    "What did you and a ghost talk about over dinner?"
  ];
  var index = 0;
  $('#next').click(function(){
    $('#quote').html(arr[index]);
    index = (index + 1) % arr.length ;
 });
});

$(function(){
  $('img').draggable();
});

$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=added]').val();
        $(".list").append('<div class="item">' + toAdd + '</div>');
    });
});
