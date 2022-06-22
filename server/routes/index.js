const express = require("express");
const Controller = require("../controllers/controller");
const authentication = require("../middlewares/authentication");
const router = express.Router();

router.post("/register", Controller.newUser);
router.post("/login", Controller.loginUser);
router.use(authentication)



module.exports = router;
