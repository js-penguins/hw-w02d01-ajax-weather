$(document).ready(function() {
    $('#submit').on('click',function(event) {
        var zipCode = $('#zipcode').val();
            $.ajax({method: 'GET',
                url:'http://api.openweathermap.org/data/2.5/weather?q='+zipCode+',us&units=imperial&appid=613669ed296c204db70a0559b9101024',
                success: function(result) {
                    $('#result').append($("<p/>").text('city :'+ result.name))
                    $('#result').append($("<p/>").text('temperature :'+ result.main.temp))
                    $('#result').append($("<p/>").text('description :'+ result.weather[0].main))
                    $('#result').append($("<p/>").text('max-temp :'+ result.main.temp_max))
                    $('#result').append($("<p/>").text('min-temp :'+ result.main.temp_min))},
                error: function(error) {
                    console.log('the error is : ' + error);}
            }) 
    event.preventDefault();})
})
