// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  $.getJSON("questions.json", function(data) {
    var messageSelectForm = $("#message-select");

    addGreetingToResponseDropDown(data);

    $("#message-select").submit(function(e) {
      e.preventDefault();
      populateChatWithSelectedResponse();
      populateChatWithBotQuestion(data);
    });
  });
});

function addGreetingToResponseDropDown(data) {
  $("#responses").append($("<option />")
                 .val(data.greeting)
                 .text(data.greeting)
                 .attr('id','selected'));
}

function populateChatWithSelectedResponse() {
  var selectedResponse = $("#responses").val();
  $(".chat_list").append($("<li class='human_msg'>" + selectedResponse + "</li>"));
  $("#message-select").empty();
}

function populateChatWithBotQuestion(data) {
  setTimeout(function(){
    $(".chat_list").append($("<li class='bot_msg'>" + data.questionTree.question + "</li>"));
  }, 1500);
}
