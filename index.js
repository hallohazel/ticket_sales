/** load library express */
const express = require('express'); // Pakai string 'express'

/** create object that instances of express */
const app = express();

/** define port of server */
const PORT = 8000;

/** load library cors */
const cors = require('cors'); // Pakai string 'cors'

/** open CORS policy */
app.use(cors());

/** define all routes */
const userRoute = require('./routes/user.route'); // Pakai string './routes/user.route'
app.use('/user', userRoute); // URL prefix pakai string '/user'

const seatRoute = require('./routes/seat.route');
app.use('/seat', seatRoute);

const eventRoute = require('./routes/event.route');
app.use('/event', eventRoute);

const ticketRoute = require('./routes/ticket.route');
app.use('/ticket', ticketRoute);

/** route to access uploaded file */
app.use(express.static(__dirname));

/** run server based on defined port */
app.listen(PORT, () => {
    console.log(`Server of Ticket Sales runs on port ${PORT}`); // Gunakan template string (``) untuk interpolasi
});