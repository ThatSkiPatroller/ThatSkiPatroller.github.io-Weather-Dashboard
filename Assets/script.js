
// Assign variables
var citylist = document.getElementById("citylist");
var dateplace = document.getElementById("currentdate");
    


// When search button is clicked, pass the value of the search field into weatherCity function
$("#searching").on("click", function (event) {
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
        mainElements(data);
        // searchedCities(data);
    });
};

// Add city returned from api data to a button that can be clicked
function addCity (response) {
    console.log(response);
    var pastcities = [];
    var cityholder = response.city.name;
    pastcities.push(cityholder);
    for (i=0; i<= pastcities.length; i++) {
        localStorage.setItem("city" + i, pastcities);
        console.log(pastcities);
    }
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

function cityinfo (response) {
// Element that date currently goes in
    var card = document.createElement("div");
    card.classList.add("card");
    var juice = document.createElement("h1");
    juice.classList.add("card-title");
    // New array so each time through loop a character is pushed into it
    console.log(dateplace.children.length);
    var datearray = [];
    // dateplace does not have
    if (dateplace.children.length < 1) {
        for (var i=0; i<=9; i++) {
            var date = response.list[0].dt_txt[i];
            datearray.push(date);
        };

    var finaldate = datearray.join("");
    var city = response.city.name;
    juice.innerText = city + " " + "(" + finaldate + ")";
    dateplace.append(card);
    card.appendChild(juice);
// Adding temp, humidity and windspeed to created card element
    var city = $(".card-title");
    var temp = document.createElement("h2");
    var fht = Math.floor(response.list[0].main.temp * (9/5) - 459.67);
    var humid = response.list[0].main.humidity;
    var wind = Math.floor(response.list[0].wind.speed * 2.237);
    temp.classList.add("card-content");
    temp.innerHTML = "<ul><li> Temperature: " + fht + "°F </li><li> Humidity: " + humid + "% </li><li> Windspeed: " + wind + "MPH </li></ul>";
    juice.appendChild(temp);
    };
};
console.log(dateplace.children.length);

// When a pastcity button is clicked, update elements to that cities content
$(".citybuttons").click(function () {
    var oldcity = $(".citybuttons").val().trim();
    weatherCity(oldcity);
    console.log(oldcity);
});

// Function to display current city, date, weather icon as the header; and current Temp, Humidity, Wind Speed, UV index listed below
function mainElements (response) {
    
    
    console.log(fht);
    
};

