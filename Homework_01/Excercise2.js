import { of } from "rxjs";

function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
    let week = ["weekend","weekday","weekday","weekday","weekday","weekday","weekend"];
    return week[day];
}
isWeekend();