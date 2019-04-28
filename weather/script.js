$(document).ready(function(){
    $("#submit").on("click",function(event){
    var zip=$("#zipcode").val()
        console.log(zip)
        event.preventDefault();
        $.ajax({
            method:"GET",
            url: "https://api.openweathermap.org/data/2.5/weather?zip="+ zip + ",us&units=metric&appid=e57d5fb648ea0954549fbf02eda6328f",
             success: function(result){
              $("#result").append($("<p/>").text("city"+" "+result.name))
              $("#result").append($("<p/>").text("Tempreture"+" "+result.main.temp))
              $("#result").append($("<p/>").text("Max Tempreture"+" "+result.main.temp_max))
              $("#result").append($("<p/>").text("Min Tempreture"+result.main.temp_min))
              $("#result").append($("<p/>").text("Weather Dwscription"+" "+result.weather[0].main))
              $("#result").append($("<p/>").text("city"+result.main.wind.speed))
               console.log(result)
             }
            error: function(error){
                 console.log("Error")
            }
            
            
            
            })})})

        
    
            

    

    
        

