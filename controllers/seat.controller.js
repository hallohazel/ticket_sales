/** load model for `seat` table */
const seatModel = require(`../models/index`).seat;

/** load Operation from Sequelize */
const Op = require(`sequelize`).Op;

/** get all seats */
exports.getAllSeat = async (request, response) => {
    try {
        let seats = await seatModel.findAll();
        return response.json({
            success: true,
            data: seats,
            message: `All seats have been loaded`
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};

/** find seat */
exports.findSeat = async (request, response) => {
    let keyword = request.params.key;

    try {
        let seats = await seatModel.findAll({
            where: {
                [Op.or]: [
                    { rowNum: { [Op.substring]: keyword } },
                    { seatNum: { [Op.eq]: parseInt(keyword) || 0 } },
                    { status: keyword.toLowerCase() === 'true' ? true :
                              keyword.toLowerCase() === 'false' ? false : null }
                ]
            }
        });
        return response.json({
            success: true,
            data: seats,
            message: `Filtered seats have been loaded`
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};

/** add new seat */
exports.addSeat = async (request, response) => {
    try {
        let newSeat = {
            eventID: request.body.eventID,
            rowNum: request.body.rowNum,
            seatNum: request.body.seatNum,
            status: request.body.status
        };

        let result = await seatModel.create(newSeat);
        return response.json({
            success: true,
            data: result,
            message: `New seat has been inserted`
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};

/** update seat */
exports.updateSeat = async (request, response) => {
    try {
        let dataSeat = {
            eventID: request.body.eventID,
            rowNum: request.body.rowNum,
            seatNum: request.body.seatNum,
            status: request.body.status
        };

        let seatID = request.params.id;
        await seatModel.update(dataSeat, { where: { seatID: seatID } });

        return response.json({
            success: true,
            message: `Seat data has been updated`
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};

/** delete seat */
exports.deleteSeat = async (request, response) => {
    try {
        let seatID = request.params.id;
        await seatModel.destroy({ where: { seatID: seatID } });

        return response.json({
            success: true,
            message: `Seat data has been deleted`
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};