var URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders";
var data = {};
var dict = {
    "coffee": "caramel swirl",
    "emailAddress": "steph@gmail.com"
};


$.get(URL, function(data) {
    console.log(data);
});


$.post(URL, dict, function(data) {
    console.log(data);
});

