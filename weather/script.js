$(document).ready(function(){

$('#submit').on('click',function(event){
     var zipCode = $('#zipcode').val();
    $.ajax({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&units=imperial&appid=3c32cd7162b59a85f320a86968453e02',
        success: function(result) {
            console.log(result);
                 $("#result").append($('<p/>').text("city:  " + result.name));
                 $("#result").append($('<p/>').text("Current temperature :  " + result.main.temp));
                 $("#result").append($('<p/>').text("Weather :  " + result.weather[0].main));
                 $("#result").append($('<p/>').text("Max temp :  " + result.main.temp_max));
                 $("#result").append($('<p/>').text("Min temp:  " + result.main.temp_min));
                 $("#result").append($('<p/>').text("Humidity :  " + result.main.humidity));
                 $("#result").append($('<p/>').text("Wind speed :  " + result.wind.speed));


                 
        },
          error: function(error) {
            console.log(error);
          }
        })
})

   
      
}); 

