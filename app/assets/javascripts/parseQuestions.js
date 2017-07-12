console.log("start");
$(document).ready(function() {
  console.log("document ready");
  $.getJSON("questions.json", function(data) {
    console.log(data);
    console.log(data.greeting);
    console.log(data.questionTree.question);
  });
});
