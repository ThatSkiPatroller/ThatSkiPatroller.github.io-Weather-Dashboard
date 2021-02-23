
// Assign variables
var citylist = document.getElementById("citylist");
var pastcities = [];
    


// Create search function
    $(".btn").on("click", function (event) {
        event.preventDefault();
        var city = $("#searchCity").val().trim();
         if (city != '') {  
            // searchedCities();
            weatherCity(city);
            addCity();
        };
}); 

// api function
function weatherCity (city) {
    console.log(city);
    var key = '9c797ab1cb0980f8f94ba90e9619d5fd';
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key;
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (data) {
        weather(data);
        citylist.innerHTML = "";
        // searchedCities(data);
    });
};

function addCity () {
    for (var i = 0; i<pastCities; i++) {
        var newCity = document.createElement("button");
        var city = capitalizeFirstLetter(pastCityNames[i])
        newCity.textContent = city;
        citylist.append(newCity);
    }
}

// function init () {

// }

// function  weather (response) {
//     console.log(response);
//     var city = response.city.name;
//     for (i=0; i<= 8; i++) {
//         localStorage.setItem("city"+ [i], city);
//         var cityholder = document.createElement("button");
//         cityholder.innerHTML = localStorage.getItem(city + [i]);
//         $("#citylist").append(cityholder);
//     }; 
    // var city = response.city.name;
 
    // var name = response.city.name;
    // citylist.innerHTML = name;
    // var date = data.list[0].dt_txt;
    // console.log(date);
// };
//    for (i=0; i<= 8; i++) {
//         localStorage.setItem("city"+ [i], city);
//         var cityholder = document.createElement("btn");
//         holder.innerText = localStorage.getItem(city + [i]);
//         $("#citylist").append(cityholder, holder);
//     }; 
// // function searchedCities (response) {
//     console.log(response);
//     for (i=0; i<= 8; i++) {
//         var city = response.city.name;
//         localStorage.setItem("city"+ [i], city);
//         var cityholder = document.createElement("btn"+[i]);
//         holder.innerText = localStorage.getItem(city);
//         $("#citylist").append(cityholder, holder);
//     }; 
// };

function pastCities () {
    var city = localStorage.getItem(city);
};