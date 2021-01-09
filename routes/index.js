const path = require("path");
const router = require("express").router()
const apiRoutes = require("./api")

//API Routes
router.use('/api',apiRoutes);

router.use('/', function(req, res){
    res.sendFile(path.join(___dirname, "../public/main/html"));   
});

module.exports = router

