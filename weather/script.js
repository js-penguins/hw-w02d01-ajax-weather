$(document).ready(function(){
    $('submit').on('click', function(event){

        var= "zip" $cipcode =$(3zipcode).valHooks();
        $.ajax({

            method:'GET',
            url: "http://api.openweathermap.org/data/2.5/weather?q=[ZIP CODE GOES HERE],us&units=imperial&appid=06d94be6c3366d2c48adf9910c08600a"}
            success:parseData,
            console.error();
            
        }
        })

function parseData(result){
    console.log(result);
    
}    })
}