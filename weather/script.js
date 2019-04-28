$(document).ready(function(){

    var search = $('#submit');
    search.on('click', function (event) {
        event.preventDefault();
        var enterZip = $('#zipcode').val();
        console.log(enterZip)

    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?zip='+enterZip+',us&units=metric&appid=fab00603e760a3500b4a15040256fa39',
        success: function (resulte) {
            console.log(resulte);
           

            $('#result').append($('<p/>').text(resulte.name));
            $('#result').append($('<p/>').text(resulte.main.temp));
            $('#result').append($('<p/>').text(resulte.weather[0].description));
            $('#result').append($('<p/>').text(resulte.main.temp_max));            
            $('#result').append($('<p/>').text(resulte.main.temp_min));
            $('#result').append($('<p/>').text(resulte.coord.lat));
            $('#result').append($('<p/>').text(resulte.coord.lon));
            $('#result').append($('<p/>').text(resulte.main.humidity));
            $('#result').append($('<p/>').text(resulte.wind.speed));

        
        },
    error: function(error) {
      console.log(error);
    }
}); 

// if(resulte.main.temp>90){
//     resulte.main.temp.css('color', 'red');
// } else if(resulte.main.temp>40){
//     resulte.main.temp.css('color', 'blue');
// }

})

})