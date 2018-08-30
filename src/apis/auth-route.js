const express = require("express");
const authController = require("../controller/auth-controller");

const router = new express.Router();
router.post("/login", login);
router.post("/join");

async function login(req, res) {
    const uid = req.body.uid;
    const upw = req.body.upw;

    if (uid === undefined || upw === undefined) return res.sendStatus(400);
    const result = await authController.login(uid, upw);
    if (result.status !==200 ) return res.sendStatus(result.status);
    //login 성공시 로직
    return res.status(200).json({token:"1234"});
}

module.exports = router;