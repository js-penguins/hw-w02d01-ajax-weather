$(document).ready(function(){    
    console.log('jq ready!');
    $('button').on('click', function(event){
        event.preventDefault();
        var zipCode = $('input').val();
    // $('#result2').append('#result');
    // $('#result3').append('<div></div>');
    $.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+ zipCode + '&units=imperial&appid=79088d1f3cc5a8ce545e40a589271ac8',
      
      success: function makeCall(zipCode) {
        // console.log(zipCode);
        var newH2 = $('<h2>').text(zipCode.name );
        $('#result').append(newH2);
        var newH3 = $('<h3>').text(zipCode.main.temp);
        $('#result').append(newH3);
        var newH4 = $('<h4>').text(zipCode.weather[0].description);
        $('#result').append(newH4);
        var newH5 = $('<h5>').text(zipCode.main.temp_min);
        $('#result').append(newH5);
        var newH6 = $('<h6>').text(zipCode.main.temp_max);
        $('#result').append(newH6);
        
      },
      error: function(error) {
        console.log('error with weather API!!!');
        console.log(error);
      }
    })
}); 
})
