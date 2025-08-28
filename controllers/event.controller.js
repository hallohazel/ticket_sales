/** load model for `event` table */
const eventModel = require(`../models/index`).eventModel

/** load operation from sequelize */
const Op = require(`sequelize`).Op

/** load library `path` and `filestream` */
const path = require(`path`)
const fs = require(`fs`)