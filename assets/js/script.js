$('.container').on("click", "#add", function(event) {
	var newNotes = $("ul").append("<li>" +"<span>"  +"</span>" +"<textarea>" + "</textarea>" +"</li>");
  $("textarea").addClass("notes-box").attr("placeholder", "Start typing here...");
  $("span").addClass("fa fa-trash-o");
  event.stopPropagation();
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(function() {
  	$(this).remove();
  });
  event.stopPropagation();
});

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