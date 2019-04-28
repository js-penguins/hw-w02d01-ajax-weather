$(document).ready(function () {

    $('#submit').on('click', function(event){
      event.preventDefault();
      var zipcode = $('#zipcode').val();
      $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+zipcode+',us&units=imperial&appid=3c98ae2e7408371942dfe453b3858052',
        success: function(result){
          console.log(result);
          $('#result').append($("<h2/>").text('City:'+ " " + result.name))
          $('#result').append($('<p/>').text('Temperture:'+ " " +result.main.temp))
          $('#result').append($('<p/>').text('Weather:'+ " " +result.weather[0].main))
          $('#result').append($('<p/>').text('Min Temp:'+ " " +result.main.temp_min))
          $('#result').append($('<p/>').text('Max Temp:'+ " " +result.main.temp_max))
          $('#result').append($('<p/>').text('Latitude:'+ " " +result.coord.lat))
          $('#result').append($('<p/>').text('Longitude:'+ " " +result.coord.lon))
          $('#result').append($('<p/>').text('Humidity:'+ " " +result.main.humidity))
          $('#result').append($('<p/>').text('Wind Speed:'+ " " +result.wind.speed))
        },
        error: function(error) {
          console.error('error!!!', error);
        }
      })
    })
    $('#result').css({'background': '#D3D3D3', 'border-radius': '10px'});
    

  })




// http://api.openweathermap.org/data/2.5/weather?q=90034,us&units=imperial&appid=3c98ae2e7408371942dfe453b3858052