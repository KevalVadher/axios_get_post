const express = require("express");
const controller = require("../controller/controller")

const router = express.Router();

router.get("/data",controller.data)
router.get("/get-data",controller.getData)
router.post("/addData",controller.addData)
router.post("/single-data",controller.addSingleData)




module.exports = router;