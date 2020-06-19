import { addMinutes, getDay, set } from 'date-fns';
import availableTimeSlot from '../models/availableTimeSlot';

const MIN_HOUR = 9;
const MAX_HOUR = 17;
const MAX_MINUTE = 30;

/*
    Generate a list of time slots based on the date selected
*/
export const generateTimeListService = (body) => {
    let availableTimeList = [];
    let currentTime = set(new Date(), {
        milliseconds: 0,
        seconds: 0
    });
    if (new Date(body.time).getDay() == currentTime.getDay() && currentTime.getHours() >= MIN_HOUR) {
        currentTime.setHours(currentTime.getHours() + 1)
        currentTime.setMinutes(0);
    }
    else {
        currentTime = new Date(body.time);
        currentTime.setHours(MIN_HOUR);
    }

    availableTimeList.push(currentTime);

    while (currentTime.getHours() < MAX_HOUR || currentTime.getMinutes() < MAX_MINUTE) {
        currentTime = addMinutes(currentTime, 30);
        availableTimeList.push(currentTime);
    }

    let allTimeSlots = [];
    let maxSlots = getDay(currentTime) == 0 || getDay(currentTime) == 6 ? 4 : 2;
    availableTimeList.forEach(each => {
        allTimeSlots.push(new availableTimeSlot(each, maxSlots));
    });
    
    return allTimeSlots;
}