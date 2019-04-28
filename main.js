
   $(document).ready(function(){
	    $('button').on('click', function(){
	        var zip = parseInt($('#zip').val())
	        makeCall(zip)
	    })
        
	    function makeCall(zip){
	        fetch(`api.openweathermap.org/data/2.5/weather?zip=94040,us=089b67313004f5615592a221f0907b7d`)
	        .then((res) => {
	            return res.json()
	        })
	        .then((res) => {
	            getData(res)
	        })
	    }
	
	    function getData(res){
	        let currentTemp = res.main.temp
	        let weatherDescription = res.weather[0].description
	        let temp_min = res.main.temp_min
	        let temp_max = res.main.temp_max
	        manipulateDom(currentTemp, weatherDescription, temp_min, temp_max)
	    }
	
	    function manipulateDom(currentTemp, weatherDescription, temp_min, temp_max){
	        $('#current').html(`${currentTemp}`)
	        $('#weather').html(`${weatherDescription}`)
	        $('#min').html(`${temp_min}`)
	        $('#max').html(`${temp_max}`)
	    }
	
	    const currentTemp = parseInt($('#current').html())
	    if(currentTemp < 40){
	        $('body').css('background-color', 'blue')
	    }
	    if(currentTemp > 90){
	        $('body').css('background-color', 'red')
	    }
	})
