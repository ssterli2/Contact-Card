'use strict';

$(document).ready(function(){
  $('#submit-button').click(function(){
    event.stopPropagation();
    var firstName = $('#first_name').val();
    var lastName = $('#last_name').val();
    var desc = $('textarea').val(); //did't work by id
    var name = $('#cards').append('<div id="div"><h2>' + firstName + ' ' + lastName + '</h2></br><button class="card-button">Click For Description</button></div><div id="desc"></div>');
    $('#desc').append('<p>' + desc + '</p>').hide();
    return false;
  });

  $(document).on('click', '.card-button', function(){
    console.log('click running');
    $('#div').hide();
    $('#desc').show();
  });

});
