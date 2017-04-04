$(document).ready(function() {
  $('#add').click(function() {
    $(this).before($('<textarea></textarea>')).appendTo('div.container');
    $('textarea').addClass('notes-box');
    $('textarea').attr('Placeholder', 'Start typing here...');
  });
});