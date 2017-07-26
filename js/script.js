$(document).ready(function() {
  var anchor = document.querySelector('button.btn');
  var textbox = document.querySelector('.notes-box');
  anchor.onclick = function () {
      var blob = new Blob([`${textbox.value}`], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "a.txt");
  };
    
  $('.btn-floating').click(function() {
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