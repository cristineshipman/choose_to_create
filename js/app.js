$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else{
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
});


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
  $('.leviosa').click(function(){
    $('.pen').animate({top:'-2000px'}, 1000);
  })
});


// students created writing prompts
// $('#button1').click(function(){
//   var prompt = $('#prompt').val();
//   //if empty
//   if($('#prompt').val() == ''){
//     console.log("nope");
//     $('#alert').html("<strong> Ooops! </strong> You didn't type out a prompt.");
//     $('#alert').fadeIn().delay(3000).fadeOut();
//     return false;
//   }
//   $('#add').replaceWith('<h2>' + prompt + "</h2>");
//   //delete whatever is in the input
//   $('#form')[0].reset();
//   var addedPrompt = $('#add').html();
//   localStorage.setItem("prompt", addedPrompt);
//   return false;
// });
//
// function saveEdits() {
//   //to get the editable element
//   var editElem = document.getElementById('edit');
//   //to get the edited element
//   var userVersion = editElem.innerHTML;
//   //save the content to local storage
//   localStorage.userEdits = userVersion;
//   //write a confimration to the user
//   document.getElementById('update').innerHTML='Edits saved!';
// }
