$(document).ready(function(){
    $('#submit').on('click', function(event){
    var takezip = $('#zipcode').val();

    $.ajax({
        method: 'GET',
        url: "https://api.openweathermap.org/data/2.5/weather?zip="+takezip+",us&units=metric&appid=98732822cbf9dbc8c09dc78665cc2698",
        success: function(result) {
        console.log(result); 
        $('#result').append($("<p/>").text('city' + result.name))
        $('#result').append($("<p/>").text('temperature' + result.main.temp))
        $('#result').append($("<p/>").text(' description' + result.weather[0].main))
        $('#result').append($("<p/>").text('max-temp' + result.main.temp_max))
        $('#result').append($("<p/>").text('min-temp' + result.main.temp_min))

    },
    error: function(error) {
      console.log('error with weather');
      console.log(error);}
})
  event.preventDefault();
    })


})