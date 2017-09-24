$(function() {

  $('#submit').on('click', function(event) {
    var zip = $('#zipcode').val();
    console.log(zip);
    makeCall(zip);
    $('#zipcode').val('');
  });

  $('#zipcode').on('keyup', function(e) { // allows user to hit enter
    if (e.keyCode == 13) {
      var zip = $('#zipcode').val();
      makeCall(zip);
      $('#zipcode').val('');
    }
  });

  function makeCall(zipcode) {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},us&units=imperial&appid=1fe969684054cabe87d1764ec55569c1`, {
      success: function(data, status) {
        console.log('status: ' + status);
        var weather = getData(data);
        appendToDom(weather);
      },
      error: function(jqxhr, status, errorThrown) {
        console.log('oops error! error thrown: ' + errorThrown);
      }
    });
  }

  function getData(responseData) {
    var weather = { // object of weather info
      city: responseData.name,
      currentTemp: responseData.main.temp,
      description: responseData.weather[0].description,
      minTemp: responseData.main.temp_min,
      maxTemp: responseData.main.temp_max,
      humidity: responseData.main.humidity
    }
    return weather
  }

  function appendToDom(weather) {
    $('#result').empty(); // clear results
    var $city = $('<h2>'); // city name
    $city.text(weather.city);
    $('#result').append($city);
    var $currentTemp = $('<h3>'); // temp
    $currentTemp.text(weather.currentTemp + '°');
    $('#result').append($currentTemp);
    if (weather.currentTemp >= 90) { // coloring for high and low temps
      $currentTemp.css('color', 'red');
    } else if (weather.currentTemp < 40) {
      $currentTemp.css('color', 'lightblue');
    } else $currentTemp.css('color', 'darkslateblue');
    var $description = $('<h3>'); // weather description
    $description.text(weather.description);
    $('#result').append($description);
    var $high = $('<div>'); // max temp
    $high.text('High: ' + weather.maxTemp + '°');
    $('#result').append($high);
    var $low = $('<div>'); // min temp
    $low.text('Low: ' + weather.minTemp + '°');
    $('#result').append($low);
    var $humid = $('<div>'); // humidity
    $humid.text('Humidity: ' + weather.humidity + '%');
    $('#result').append($humid);
  }

}); // ends doc.ready
