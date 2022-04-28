import { Coach } from "./Coach";

export class BasketallCoach implements Coach {

    getDailyWorkout(): string {
        return "Practice your Shot and Dribble";
    }
    
}