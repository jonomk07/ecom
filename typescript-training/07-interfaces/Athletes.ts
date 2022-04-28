import { BasketallCoach } from "./BasketallCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myBasketallCoach = new BasketallCoach();
let myGolfCoach = new GolfCoach();

// declare an array for coaches ... initially empty
let theCoaches: Coach[] = [];

// add the coaches to the array
theCoaches.push(myBasketallCoach);
theCoaches.push(myGolfCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}