$(document).ready(function() {
  $('#add').click(function() {
    $(this).before($('<textarea></textarea>')).appendTo('div.container');
  });
});