    $(document).ready(function(){
    $('submit').on('click', function(event){
    
    event.preventDefault();
    
    var $zipcode = $('#zipcode').val();
        
    $.ajax({
    method:'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+ zipcode +',us&units=imperial&appid=0338ea11af140bfb155ba7e0903c72fe',
        
    success: parseData,        
    
    error : function(error){
    console.log(error);
                
    }
            
    });
        
    })
    
    function parseData(result){
    console.log(result);
    // The parameters from https://openweathermap.org/current#zip
    ($('<p/>').text('City name : ' + result.name)).appendTo('#result')
    ($('<p/>').text('Current temperature : '+ result.temperature.value)).appendTo('#result')
    ($('<p/>').text('Weather description : '+ result.weather.description)).appendTo('#result')
    ($('<p/>').text('Min temp : '+ result.main.temp_min)).appendTo('#result')
    ($('<p/>').text('Max temp : ' + result.main.temp_max)).appendTo('#result') 
    }
    })

 
