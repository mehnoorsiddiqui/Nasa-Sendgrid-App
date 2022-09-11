const Router = require("express");
const getSingleImage = require("./getSingleImage");
const mailSend = require("./mailSend");
const api = Router();

api.get("/emailImage", async (req, res) => {
    const base64Img = await getSingleImage();
    const emailImage = await mailSend(base64Img);
    res.send({ emailMeg: emailImage })
});

module.exports = api;