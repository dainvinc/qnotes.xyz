$(document).ready(function() {
  $(".glyphicon").click( function() {
    var text = $(".notes-box").trim().val();
    //var filename = $("#input-fileName").val()
    if(text.trim() === "") {
      alert("Please, write something to download.");
    } else {
      var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "qnotes.txt");
    }
  });
  
  $('#add').click(function() {
    $(this).before($('<textarea></textarea>')).appendTo('div.container');
    $('textarea').addClass('notes-box');
    $('textarea').attr('Placeholder', 'Start typing here...');
  });
});
  // var str = $('.main-title').css({
  //   "visibility": "visible"
  // });
  //$('.main-title').style.visibility="visible";
  // console.log(str[0]);
  // var txt = document.getElementsByTagName("h2")[0].textContent;
  // var splitTxt = txt.split("");
  // txt.style.visibility="visible";
  // //alert(splitTxt[0]);
  // for(var i=0; i<txt.length; i++) {
  //   console.log(splitTxt[i]);
  //   //show(str[i]);
  //   txt.style.visibility="visible";
  //   // setTimeout(function(){
  //   //   splitTxt[i].style.visibility="visible";
  //   // }, 1000);
  // }
// async function demo() {
//   console.log('Taking a break...');
//   await sleep(2000);
//   console.log('Two second later');
// }
