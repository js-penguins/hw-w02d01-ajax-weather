$(document).ready(function(){
    $('#submit').click(function (event) {
        $('#result').empty();
        makeCall($('#zipcode').val());
    })

    function makeCall(zipcode) {
        $.ajax({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q='+ zipcode +
            ',us&units=imperial&appid=b8c76467aaccb7d9251f81faf8a99ff8',
            success: parseData,
            error: function(response) {
                console.log('error with weather maps');
                console.log(response);
            }
        })

    }

    function parseData(data) {
       var cityName = data.name;
       var currentTemp = data.main.temp;
       var description = data.weather[0].description;
       var minTemp = data.main.temp_min;
       var maxTemp = data.main.temp_max;

       appendToDom(cityName, currentTemp, description, minTemp, maxTemp)
    }

    function appendToDom(name, temp, desc, min, max) {
        var $result = $('#result');
        var $name = $('<h2>').text(name);
        var $temp = $('<p>').text('temp: ' + temp + '°F');
        var $min = $('<p>').text('min: ' + min + '°F');
        var $max = $('<p>').text('max: ' + max + '°F');
        var $desc = $('<p>').text(desc)

        $result.append($name, $temp, $min, $max, $desc);
    }
}); 
