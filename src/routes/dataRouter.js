import Router from 'koa-router';
import { getBookings, placeBooking } from '../controller/bookingController';

const router = new Router();

/*
    Routers for adding and getting bookings and list of time slot
 */
router.get('/bookings', async (ctx) => {
    try {
        ctx.body = await getBookings(ctx.request.body);
    } catch (error) {
        ctx.status = error.status || 500;
        ctx.body = error.message;
    }
});

router.post('/place-booking', async (ctx) => {
    ctx.body = await placeBooking(ctx.request.body);
});

export default router;