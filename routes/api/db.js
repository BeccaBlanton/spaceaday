const router = require("express").Router()
const controller = require("../../controller/controller")

router.route("/").get(controller.findAllPost)

router.route("/new").post(controller.createNewPost);

module.exports = router;