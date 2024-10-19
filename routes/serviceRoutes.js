const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.post("/services", serviceController.addService);
router.get("/services", serviceController.getServices);
router.put("/services/:id", serviceController.updateService);
router.delete("/services/:id", serviceController.deleteService);

module.exports = router;
