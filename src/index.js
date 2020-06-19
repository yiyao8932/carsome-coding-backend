import Koa from 'koa';
import dataRouter from './routes/dataRouter';
import bodyParser from 'koa-body';
import cors from '@koa/cors';
import dotenv from 'dotenv';
dotenv.config();

let PORT = process.env.PORT || 3000;
const app = new Koa();
app.use(bodyParser());
app.use(cors());

app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  });

app.use(dataRouter.routes())
app.use(dataRouter.allowedMethods());

app.listen(PORT);
console.log("Listening at port: " + PORT);

export default app;