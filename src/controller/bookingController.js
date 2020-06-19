import Booking from '../models/booking';

/*
    A controller for calculating available time slots and remove any unavailable time slots
*/
export const getBookings = async () => {
    try {
        return await Booking.findAll({ raw: true });
    } catch (error) {
        throw new Error("Failed to get bookings");
    }
}

/*
    Add new booking
*/
export const placeBooking = (body) => {
    try {
        return Booking.create(body);
    } catch (error) {
        throw new Error("Failed to place booking");
    }
}
