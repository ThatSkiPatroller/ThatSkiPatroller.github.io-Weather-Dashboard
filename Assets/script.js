$(document).ready(function () {
// Assign variables
var city = $("#searchCity").val();
// Fetch api function
    


// Create search function
    $(".btn").on("click", function () {
        if ($("#searchCity" != undefined)) {
            for (i=0; i <= 8; i++) {
                localStorage.setItem("city"+[i], city);
                weatherCity();
            };
        };
   function weatherCity (city) {
        var key = "9c797ab1cb0980f8f94ba90e9619d5fd";
         fetch('api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)
        .then(function(resp) { (resp.json())})
        .then(function(data) {
            console.log(data);
        }); 
    };     
});
});
