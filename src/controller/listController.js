import Booking from '../models/booking';
import { generateTimeListService } from '../services/generateTimeListService';

/*
    A controller for calculating available time slots and remove any unavailable time slots
*/
export const getBookings = async () => {
    try {
        return await Booking.findAll({ raw: true });
    } catch (error) {
        throw new Error("Failed to generate list of time");
    }
}

/*
    Add new booking
*/
export const placeBooking = (body) => {
    return Booking.create(body);
}
