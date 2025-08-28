/* load express **/
const express = require(`express`)
const app = express()

/** load seat controller */
const seatController = require(`../controllers/seat.controller`)

/** allow request with json */
app.use(express.json())

/** define end point for GET all seat */
app.get("/", seatController.getAllSeat)

/** define end point for GET seat by keyword (filter) */
app.get("/find/:key", seatController.findSeat)

/** define end point for POST new seat */
app.post("/", seatController.addSeat)

/** define end point for PUT update seat */
app.put("/:id", seatController.updateSeat)

/** define end point for DELETE seat */
app.delete("/:id", seatController.deleteSeat)

module.exports = app