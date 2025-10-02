/** load library express */
const express = require(`express`)

/** create object that instances of express */
const app = express()

/** define port of server */
const PORT = 8000

/** allow express to read JSON body from request */
app.use(express.json())

/** load library cors */
const cors = require(`cors`)

/** open CORS policy */
app.use(cors())

/** define all routes */
const userRoute = require(`./routes/user.route`)
/** define prefix for each route */
app.use(`/user`, userRoute)

const seatRoute = require(`./routes/seat.route`)
app.use(`/seat`, seatRoute)

const eventRoute = require(`./routes/event.route`)
app.use(`/event`, eventRoute)

const ticketRoute = require(`./routes/ticket.route`)
app.use(`/ticket`, ticketRoute)

/** route to access uploaded file */
app.use(express.static(__dirname))

/** run server based on defined port */
app.listen(PORT, () => {
    console.log(`Server of Ticket Sales runs on port ${PORT}`)
})