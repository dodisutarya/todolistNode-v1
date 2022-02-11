//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var item = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    // var currentDay = today.getDay();
    // var day = "";

    // Checking Weekend/Weekday
    // if (currentDay === 6 || currentDay === 0) {
    //     day = "weekend";
    // } else {
    //     day = "weekday";
    // }

    // Checking Name of The Day
    // switch (currentDay) {
    //     case 0:
    //         day = "Minggu";
    //         break;
    //     case 1:
    //         day = "Senin";
    //         break;
    //     case 2:
    //         day = "Selasa";
    //         break;
    //     case 3:
    //         day = "Rabu";
    //         break;
    //     case 4:
    //         day = "Kamis";
    //         break;
    //     case 5:
    //         day = "Jumat";
    //         break;
    //     case 6:
    //         day = "Sabtu";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to : " + currentDay);
    // }



    res.render("list", { 
        kindOfDay: day,
        newListItems: items 
    });

});

app.post("/", function(req, res){
   var item = req.body.newItem;

   items.push(item);
   
   res.redirect("/");

});

app.listen(3000, function () {
    console.log("Server berjalan di port 3000");
});