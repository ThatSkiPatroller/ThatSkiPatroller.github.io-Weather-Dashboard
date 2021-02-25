
// Assign variables
var citylist = document.getElementById("citylist");
var dateplace = document.getElementById("currentdate");
    


// When search button is clicked, pass the value of the search field into weatherCity function
    $(".btn").on("click", function (event) {
        event.preventDefault();
        var city = $("#searchCity").val().trim();
         if (city != '') {  
            // searchedCities();
            weatherCity(city);
        };
}); 

// Call openweather api and pass data into functions
function weatherCity (city) {
    console.log(city);
    var key = '9c797ab1cb0980f8f94ba90e9619d5fd';
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key;
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (data) {
        // weather(data);
        addCity(data);
        cityinfo(data);
        // searchedCities(data);
    });
};

// Add city returned from api data to a button that can be clicked
function addCity (response) {
    var pastcities = [];
    var cityholder = response.city.name;
    pastcities.push(cityholder);
    localStorage.setItem("city", pastcities);
    console.log(pastcities);
    var storedcities = localStorage.getItem("city");
    // var newstored = JSON.stringify(storedcities);
    // console.log(storedcities[0]);

// For each element (city) in the array create a button
    pastcities.forEach(function (element) {
            console.log(element);
            var newCity = document.createElement("button");
            newCity.classList.add("citybuttons");
            newCity.textContent = element;
            citylist.append(newCity);
        });
    };

// Function to display current city, date, weather icon as the header; and current Temp, Humidity, Wind Speed, UV index listed below
function cityinfo (response) {
    var date = response.list[0].dt_txt;
    console.log(date);
    $("#currentdate").html(date);
};

// When a pastcity button is clicked, update elements to that cities content
$("citybuttons").click(function () {

});