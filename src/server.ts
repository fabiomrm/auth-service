import express from 'express';
import pingRoutes from './routes/ping.routes';
import userRoutes from './routes/users.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(userRoutes);

app.use(pingRoutes);



app.listen(3000, () => {
    console.log('Server UP')
})