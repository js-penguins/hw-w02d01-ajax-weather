$(document).ready(function(){
    console.log('hello')
    
  $('#submit').on('click', function (event) {
        var zipcode = $('#zipcode').val();
        console.log(zipcode)
        event.preventDefault();

        makeCall(zipcode) 
       

})


function makeCall(zipcode){

    var urlzip='http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&units=metric&appid=441b3567c922710d606b0be6cc7a5344'
    console.log(urlzip);



$.ajax ({

    method: 'GET',
    url: urlzip,
    success: function(result){
        console.log(result);
      
     
     $('#city').text(result.name);

     $('#temp').text(result.main.temp);
     if (result.main.temp < 4)
     document.getElementById("temp").style.color = "blue";

     else if (result.main.temp > 32)
     document.getElementById("temp").style.color = "red";

     $('#des').text(result.weather[0].description);
     $('#max').text(result.main.temp_max);            
     $('#min').text(result.main.temp_min);
     $('#lat').text(result.coord.lat);
     $('#lon').text(result.coord.lon);
     $('#humi').text(result.main.humidity);
     $('#speed').text(result.wind.speed);

        
    },
    error:function(result){
        console.log(error)
    }
    



})

}


})

