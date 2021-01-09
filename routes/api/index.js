cosnt router = require("express").Router()
const nasaRoutes = require("./nasa")
const dbRoutes = require("./db")
const router = require("express").Router()

//seperated routes
router.use("/nasa", nasaRoutes);

router.use("/posts", dbRoutes);

module.exports = router;