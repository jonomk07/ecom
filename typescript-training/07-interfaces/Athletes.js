"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasketallCoach_1 = require("./BasketallCoach");
const GolfCoach_1 = require("./GolfCoach");
let myBasketallCoach = new BasketallCoach_1.BasketallCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
// declare an array for coaches ... initially empty
let theCoaches = [];
// add the coaches to the array
theCoaches.push(myBasketallCoach);
theCoaches.push(myGolfCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
