// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  $.getJSON("questions.json", function(data) {
    var messageSelectForm = $("#first-message-select");

    addGreetingToResponseDropDown(data);

    $("#first-message-select").submit(function(e) {
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
  $(".chat_bottom").empty();
}

function populateChatWithBotQuestion(data) {
  setTimeout(function() {
    $(".chat_list").append($("<li class='bot_msg'>" + data.questionTree.question + "</li>"));
    addAnswerstoResponseDropdown(data)
  }, 1500);
}

function addAnswerstoResponseDropdown(data) {
  // WiP. No submit button/form handler
  $(".chat_bottom").append("<form id='answer-select'><select id='responses'></select></form")
  var questionOneAnswers = data.questionTree.answers
  for (var i = 0; i < questionOneAnswers.length; i++) {
    $("#responses").append($("<option />")
                   .val(questionOneAnswers[i])
                   .text(questionOneAnswers[i]));
  }
}
