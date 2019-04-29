$(document).ready(function(){

        $('button').on('click', function(event){
            event.preventDefault();
              var zipcode = $('input').val();
              console.log(zipcode)
              $.ajax ({
                  method: 'GET',
                  url: 'http://api.openweathermap.org/data/2.5/weather?q='+ zipcode +'&units=imperial&appid=802af02fe8c619f0d303fec3b453a858',
                  success: function (zipcode) {
                  
                      $('#result').text(zipcode.name + '   '  + zipcode.main.temp + '     '+ zipcode.weather.description +'   ' +zipcode.main.temp_min +'   '+ zipcode.main.temp_max);
                        
                    
                    
                      },
                  error: function (error) {
                      console.log(error);
                  }
                  
              })
          })
        


















}); 
