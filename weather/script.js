//http://api.openweathermap.org/data/2.5/weather?q=[ZIP CODE GOES HERE],us&units=imperial&appid=25b1939654b44cec95072e533f95fc9e
$(document).ready(function(){
    var zip;
$('#submit').on('click', function(event){
    event.preventDefault();
    zip=$('#zipcode').val();
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+zip+',us&units=imperial&appid=25b1939654b44cec95072e533f95fc9e',
        success: function(weather){
        
        var city=$('<p>').text('City name: '+weather.name);
        $('#result').append(city);

        var temp=$('<p>').text('Current temperature: '+weather.main.temp);
        $('#result').append(temp);
        
        var description=$('<p>').text('Weather description: '+weather.weather[0].description);
        $('#result').append(description);

        var minTemp=$('<p>').text('Min temp: '+weather.main.temp_min);
        $('#result').append(minTemp);

        var maxTemp=$('<p>').text('Max temp: '+weather.main.temp_max);
        $('#result').append(maxTemp);
        
        var latitude=$('<p>').text('latitude: '+weather.coord.lat);
        $('#result').append(latitude);

        var longitude=$('<p>').text('longitude: '+weather.coord.lon);
        $('#result').append(longitude);

        var humidity=$('<p>').text('humidity: '+weather.main.humidity);
        $('#result').append(humidity);

        var windSpeed=$('<p>').text('wind speed: '+weather.wind.speed);
        $('#result').append(windSpeed);
        },
        error: function(error){
            console.log(error);
        }
    })
})
}); 
