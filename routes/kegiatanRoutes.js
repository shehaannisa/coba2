const express = require("express");
const router = express.Router();
const uploadKegiatan = require("../controllers/kegiatanController");
const {
    getAllKegiatan,
    getKegiatanByID,
    deleteKegiatanByID,
    updateKegiatanByID,
} = require("../controllers/kegiatanController");

router.post("/postKegiatan", uploadKegiatan);
router.get("/getAllKegiatan", getAllKegiatan);
router.get("/:id", getKegiatanByID);
router.delete("/:id", deleteKegiatanByID);
router.patch("/:id", updateKegiatanByID);

module.exports = router;
