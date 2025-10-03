/** load md5 library */
const md5 = require(`md5`)

/** load library jsonwebtoken */
const jwt = require(`jsonwebtoken`)

/** load model of user */
const userModel = require(`../models/index`).user

/** define secret key as signature */
const secret = `mokleters`

/** create function to handle authenticating process */
const authenticate = async (request, response) => {
    let dataLogin = {
        email: request.body.email,
        password: md5(request.body.password)
    }

    /** check data username and password on user's table */
    let dataUser = await userModel.findOne({ where: dataLogin })

    /** if data user exists */
    if (dataUser) {
        /** set payload for generate token.
        * payload is must be string.
        * dataUser is object, so we must convert to string.
        */
        let payload = JSON.stringify(dataUser)
        console.log(payload)

        /** generate token */
        let token = jwt.sign(payload, secret)
        /** define response */
        return response.json({
            success: true,
            logged: true,
            message: `Authentication Success`,
            token: token,
            data: dataUser
        })
    }
    /** if data user is not exists */
    return response.json({
        success: false,
        logged: false,
        message: `Authentication Failed. Invalid username or password`
    })
}