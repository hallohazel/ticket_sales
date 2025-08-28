// src/controllers/seat.controller.js

const seatModel = require("../models/index").Seat;

exports.getAllSeat = async (request, response) => {
    const seats = await seatModel.findAll();
    return response.json({
        success: true,
        data: seats,
        message: "All seats have been loaded",
    });
};

exports.getSeat = async (request, response) => {
    const seatID = request.params.id;
    const seat = await seatModel.findByPk(seatID);
    if (!seat) {
        return response.json({
            success: false,
            message: "Seat not found",
        });
    }
    return response.json({
        success: true,
        data: seat,
        message: "Seat has been loaded",
    });
};

exports.createSeat = async (request, response) => {
    const newSeat = {
        eventID: request.body.eventID,
        rowNum: request.body.rowNum,
        seatNum: request.body.seatNum,
    };
    const seat = await seatModel.create(newSeat);
    return response.json({
        success: true,
        data: seat,
        message: "New seat has been created",
    });
};

exports.updateSeat = async (request, response) => {
    const seatID = request.params.id;
    const updatedSeat = {
        eventID: request.body.eventID,
        rowNum: request.body.rowNum,
        seatNum: request.body.seatNum,
    };
    const seat = await seatModel.update(updatedSeat, { where: { seatID } });
    if (!seat) {
        return response.json({
            success: false,
            message: "Seat not found",
        });
    }
    return response.json({
        success: true,
        message: "Seat has been updated",
    });
};

exports.deleteSeat = async (request, response) => {
    const seatID = request.params.id;
    const seat = await seatModel.destroy({ where: { seatID } });
    if (!seat) {
        return response.json({
            success: false,
            message: "Seat not found",
        });
    }
    return response.json({
        success: true,
        message: "Seat has been deleted",
    });
};