$(document).ready(function(){


    $().on('submit')
 
    $("form").submit(function (event) {
        event.preventDefault();
        var zipCode = $('input').val();
 
        console.log(zipCode);
        $.ajax({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&appid=2237f8564ff7a990cd8be6ffbf574930',
            success: function (result) {
                console.log(result);
                $('#cn').text(result.name);
                $('#temp').text(result.main.temp);
                $('#Weather_description').text(result.weather[0].description);
                $('#min_temp').text(result.main.temp_min);
                $('#max_temp').text(result.main.temp_max);
                $('#latitude').text(result.coord.lat);
                $('#longitude').text(result.coord.lon);
                $('#humidity').text(result.main.humidity);
                $('#precipitation').text(result.weather[0].main);
                $('#wind_speed').text(result.wind.speed);
 
 
            },
            error: function (error) {
             alert('wrong zip code')
                console.log(error);
            }
        })
       
 
    });
 
 });