$(document).ready(function(){
console.log('it works');
$('#mapbtn').click(function(){

    $("#map").modal({
        fadeDuration: 1000,
        fadeDelay: 0.50
      });
})

  
    $('#submit').on('click',function(){
        var txt = $('#zipcode').val();
        console.log(txt);
    


            $.ajax({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?zip='+txt+',us&units=imperial&appid=0a62dca5b77aed56d8a14642d633ed24',
            success: function(result){
                $('<h3>').attr('id','cityName').text('City: ').appendTo('#result')
               $('<p>').text(result.name).appendTo('#result')
               $('<h3>').attr('id','cityTemp').text('Temp: ').appendTo('#result')
               $('<p>').text(result.main.temp).appendTo('#result')
               $('<h3>').attr('id','citydescription').text('description: ').appendTo('#result')
               $('<p>').text(result.weather[0].description).appendTo('#result')
               $('<h3>').attr('id','cityLow').text('Low: ').appendTo('#result')
               $('<p>').text(result.main.temp_min).appendTo('#result')
               $('<h3>').attr('id','cityHigh').text('High: ').appendTo('#result')
               $('<p>').text(result.main.temp_max).appendTo('#result')
               $('<h3>').attr('id','cityLon').text('Lon: ').appendTo('#result')
               $('<p>').text(result.coord.lon).appendTo('#result')
               $('<h3>').attr('id','cityLat').text('Lat: ').appendTo('#result')
               $('<p>').text(result.coord.lat).appendTo('#result')
               $('<h3>').attr('id','cityHumid').text('Humidity: ').appendTo('#result')
               $('<p>').text(result.main.humidity).appendTo('#result')
               $('<h3>').attr('id','citySpeed').text('Wind Speed: ').appendTo('#result')
               $('<p>').text(result.wind.speed).appendTo('#result')
               
               
            },
            error: function(error){
                console.log(error);
            }
            })
    })
    
}); 
