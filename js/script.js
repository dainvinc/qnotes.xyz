$(document).ready(function() {
  $(".glyphicon").click( function() {
    var text = $(".notes-box").val();
    //var filename = $("#input-fileName").val()
    if(text.trim() === "") {
      alert("Please, write something to download.");
    } else {
      var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "qnotes.txt");
    }
  });
  
  $('#add').click(function() {
    $('<textarea></textarea>').appendTo('#main-notes');
    $('textarea').addClass('notes-box');
    $('textarea').attr('Placeholder', 'Start typing here...');
  });
});