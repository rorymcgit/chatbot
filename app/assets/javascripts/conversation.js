// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  $.getJSON("questions.json", function(data) {
    console.log(data);
    $("#responses").append($("<option />")
                   .val(data.greeting)
                   .text(data.greeting)
                   .attr('id','selected'));
  });

  $("#message-select").submit(function(e) {
    e.preventDefault();
    var selectedResponse = $("#responses").val();
    $(".chat_list").append($("<li class='chat_msg'>" + selectedResponse + "</li>"));
  });
});
