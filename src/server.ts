import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import pingRoutes from './routes/ping.routes';
import userRoutes from './routes/users.routes';
import authorizationRoute from './routes/authorization.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use(userRoutes);
app.use(authorizationRoute);
app.use(pingRoutes);

//Error Handler
app.use(errorHandler);


app.listen(3000, () => {
    console.log('Server UP')
})