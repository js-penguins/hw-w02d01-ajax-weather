$(document).ready(function() {

    $('#submit').on('click', function(event) {

        var zip = $('#zipcode').val();
        console.log(zip)
        console.log('hi')
        $.ajax({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=metric&appid=28ab32de8c4f582c7b7c6b204686db1e',
            success: function(result) {
                console.log(result)
                $('#result').append($('<p/>').text('City: ' + result.name))
                $('#result').append($('<p/>').text('temperature: ' + result.main.temp + 'C'))
                $('#result').append($('<p/>').text('description: ' + result.weather[0].main))
                $('#result').append($('<p/>').text('max-temp: ' + result.main.temp_max + ' min-tamp: ' + result.main.temp_min))
                $('#result').append($('<p/>').text('max-temp: ' + result.main.humidity))
                $('#result').append($('<p/>').text('latitude: ' + result.coord.lat + ' longitude: ' + result.coord.lon))
                $('#result').append($('<p/>').text('wind speed: ' + result.wind.speed))

            },
            error: function(result) {}
        })
        event.preventDefault();
    })


})