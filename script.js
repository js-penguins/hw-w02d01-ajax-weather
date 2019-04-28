$(document).ready(function(){

    $('form').on('submit',function(data){
        data.preventDefault();
        var zipCode = $('#zipcode').val();
    $.ajax({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?q='+ zipCode +'&units=metric&APPID=b29fada89b4605925869e863e1a13388',
        success: weatherRender,
        error: function(error){
            console.log(error);
        }
    });
    })
        function weatherRender (result){
            var cityName = result.name;
            var currentTemp = result.main.temp;
            var weatherDes = result.weather[0].description;
            var minTemp = result.main.temp_min;
            var maxTemp = result.main.temp_max;

            $('#result').append($('<p></p>').text('City Name '+cityName));
            $('#result').append($('<p></p>').text('Current Temprature '+currentTemp+' °C'));
            $('#result').append($('<p></p>').text('Weather Description '+weatherDes));
            $('#result').append($('<p></p>').text('Minimum Temprature '+minTemp+' °C'));
            $('#result').append($('<p></p>').text('Maximum Temprature '+maxTemp+' °C'));
            console.log(cityName+currentTemp+weatherDes+minTemp+maxTemp)
            console.log(result)
           // $('#weather').text(result.main.temp+'°C Riyadh');
        
        }
     
    



}); 
