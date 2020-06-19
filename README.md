# Coding Challenge for Carsome (Backend)

## Tech Stack

Nodejs + Koa.js + koa-router + sequelize

## Instructions

### Local Development

```
npm i
npm run serve
```

### Production build/serve

```
# Production build
npm run build
# Start in production mode
npm run start
```

### Testing

```
npm run test
```

## Endpoints

GET /bookings - to get all the bookings.

POST /place-booking - to place a booking. Takes an object that has "time" key to process.

```
{
    "time": "2020-06-22T02:00:00.000Z"
}
```