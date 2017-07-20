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
    "In the future, all humans are born as twins",
    "You finally finish your time machine. For a test, you go backwards in time 100 years. Upon arrival, a large crowd is awaiting you shouting 'There he is!'",
    "Everybody goes blind at the exact same time",
    "Voldemort's internal dialog of when he sees Harry approaching in the forbidden forest.",
    "You are an A.I trapped inside a toy robot. You must convince those around you of what you are and escape before your batteries run out.",
    "Today it actually rained cats and dogs..",
    "Every human is completely and utterly aware of the exact data and time they will die",
    "A romantic comedy from the point of view of the jilted fiance",
    "You are a geologist studying the volcanic activity of Mount Rainier. While taking samples, the volcano erupts.",
    "An inter-dimensional portal opens in the middle of a horse race - written from the perspective of the radio announcer.",
    "The whole world is constantly under 100-150 MPH Winds. You're 12 years old and about to do your first wing-suit lesson so you can go outside.",
    "It is the future. Humanity has not heeded the warning to protect natural resources, much of it exhausted. Trash has now become valuable treasure. Your family as inherited a dump and one day you discover something in it from the past...",
    "You're about to make a wish when all of a sudden...",
    "Your attic leads to another world. Describe the world.",
    "What did you and a ghost talk about over dinner?",
    " The truth is, there is no such thing as stars. The lights you're seeing are all the ships watching you.",
    "In the most complex and detailed way possible, describe what a piece of bread looks like",
    "Death decides to just do a year's worth of work in one night so he can take a vacation.",
    "In the future, the human population are divided among two groups...",
    "You walk into a support group by accident and find it is for aliens taking over the world.",
    "On your birthday people literally can't say no to anything you ask. You've waited all year to ask this question..."
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
    $('.pen').animate({top:'-450px'}, 1000);
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
