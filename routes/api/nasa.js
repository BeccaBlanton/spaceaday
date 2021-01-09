const router = require("express").Router()
const controller = require("../../controller/controller")

router.route("/").get(controller.picOfTheDay)

module.exports = router;