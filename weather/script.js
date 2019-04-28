$(document).ready(function(){
   


        $('button').on('submit',function(event){
           // event.preventDefault();
            var input = $('#zipcode').val();
        
            $.ajax({
              method:'GIT' ,
              //http://api.openweathermap.org/data/2.5/weather?q=[ZIP CODE GOES HERE],us&units=imperial&appid=[bba587894e70564c43ee064cda15b988
              url:'http://api.openweathermap.org/data/2.5/weather?q='+input+',us&units=imperial&appus&ppid=appid=bba587894e70564c43ee064cda15b988',
              success: function(result){
                console.log(result);
                var r = $('#result').append('<h4>');
                $(r).text(result.name);
                $(r).text(result.coord.lat);
                $(r).text(result.weather[0].description);
                $(r).text(result.main.temp_main);
                $(r).text(result.main.temp_max);
              },
              error: function(error) {
                console.error( error);
            }
        
        })
    
    })
})  
