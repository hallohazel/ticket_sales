/** load library express */
const express = require(`express`);

/** initiate object that instance of express */
const app = express();

/** allow to read 'request' with json type */
app.use(express.json());

/** load seat's controller */
const seatController = require(`../controllers/seat.controller`);

/** create route to get data with method "GET" */
app.get("/", seatController.getAllSeat);

/** create route to find seat */
app.get("/:key", seatController.findSeat);

/** create route to add new seat */
app.post("/", seatController.addSeat);

/** create route to update seat */
app.put("/:id", seatController.updateSeat);

/** create route to delete seat */
app.delete("/:id", seatController.deleteSeat);

/** export app */
module.exports = app;