
// Assign variables


    


// Create search function
    $(".btn").on("click", function (event) {
        event.preventDefault();
        var city = $("#searchCity").val().trim();
         if (city != '') {  
            weatherCity(city);
            weathercards();
        };
}); 

// api function
function weatherCity (city) {
    console.log(city);
    var key = '9c797ab1cb0980f8f94ba90e9619d5fd';
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key;
    console.log(url);
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        return response.json();
        var name = response['name'];
        console.log(name);
    });
};

function weathercards () {
    var temp = Math.round(parseFloat(d.main.temp)-273.15);
    document.getElementById('citylist').innerHTML = d.name;
}


