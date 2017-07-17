

// created list of writing prompts
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


// wingardem leviosa
$(function(){
  $('img').draggable();
});


// students created writing prompts
localStorage('');
