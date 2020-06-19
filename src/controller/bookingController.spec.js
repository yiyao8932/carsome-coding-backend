import { expect } from 'chai';
import { getBookings } from './bookingController';

describe("bookings", function () {
  it("it should exist.", function () {
    expect(getBookings).to.exist;
  });
  it("getBookings should exist.", function () {
    expect(getBookings()).to.exist;
  });
  it("getBookings can return.", async function () {
    const bookings = await getBookings();
    expect(bookings).to.exist;
    expect(bookings.length).be.above(0);
  });
});