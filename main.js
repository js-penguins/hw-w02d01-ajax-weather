// Use the pokemon API to fill out the web page
// https://pokeapi.co/
// Look at the docs!

// Make a call to the pokemon of your choice!
// The url will look something like:
// https://pokeapi.co/api/v2/pokemon/vulpix/

// HINT: 
// Start by creating an ajax call and 
//   log the response to the console!
// Then use the response to change the 
//   appropriate html elements!

$(document).ready(function () {
    var randomIndex = Math.floor(Math.random() * 807) + 1;
    $.ajax({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/' + randomIndex + '/',
        success: renerApiData,
        error: function (error) {
            console.log(error);
        }
    })
    function renerApiData(data) {
        $('#name').text(data.name);
        $('#weight').text(data.weight);
        $('#height').text(data.height);
        $('#type').text(data.types[0].type.name);

    }
    $().on('submit')
    $("form").submit(function (event) {
        event.preventDefault(); 
        var Pokemon = $('input').val();
        $.ajax({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/' + Pokemon + '/',
            success: function (result) {
                $('#name').text(result.name);
                $('#id').text(result.id);
                $('#weight').text(result.weight);
                $('#height').text(result.height);
                $('#type').text(result.types[0].type.name);


            },
            error: function (error) {
                console.log(error);
            }
        })


    });


}) // DON'T WRITE CODE BELOW THIS!

// BONUS - its a tough one!
// uncomment the form in index.html
// create an event listener for when the form is submitted
// when it is, get the value of the #pokemon input
// use the value to construct your url and make a call 
// to get information about that pokemon