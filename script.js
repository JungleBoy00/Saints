$('#submit').click(() => {
  $('.field').css("display", "none");
  $('#title').html("Loading...")
  $('#loading').css("display", "block");
  let e = encodeURIComponent($('#email').val());
  let t = encodeURIComponent($('#token').val())
  let c = encodeURIComponent($('#options').val());
  $.get(`/send?email=${e}&token=${t}&country=${c}`, function(data, status){
    $('#loading').css("display", "none");
    data = data
    $('#title').html(data.result)
    $('#description').html(data.description);
  });
});

$("input:checkbox#tandc").click(function() {
  if(!$(this).is(":checked"))
    $('#submit').attr('disabled', 'disabled');
  else
    $('#submit').removeAttr('disabled');
});

$( document ).ready(function() {
  $.get('/api/countries', function(data, status){
    data = data;
    for (let c of data) {
      if (c.count === 0) $('#options').append($("<option>", {disabled: 'disabled',value:c.country, text:`${c.country} - ${c.count}`}));
      else $('#options').append($('<option>', {value:c.country, text:`${c.country} - ${c.count}`}))
    }
  })

  
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
