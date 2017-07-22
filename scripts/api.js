var URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders";
// var data = {};
var dict = {
    "coffee": "unicorn",
    "emailAddress": "steph@yahoo.com"
};


$.get(URL, function(theseDontMatterToMyCode) {
    console.log(theseDontMatterToMyCode);
});


$.post(URL, dict, function(theseDontMatterToMyCode) {
    console.log(theseDontMatterToMyCode);
});

