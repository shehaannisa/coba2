const express = require("express");
const router = express.Router();

const {
    getAllKegiatan,
    getKegiatanByID,
    uploadKegiatan,
    deleteKegiatanByID,
    updateKegiatanByID,
} = require("../controllers/kegiatanController");

router.get("/AllKegiatan", getAllKegiatan);
router.get("/:id", getKegiatanByID);
router.post("/postKegiatan", uploadKegiatan);
router.delete("/:id", deleteKegiatanByID);
router.patch("/:id", updateKegiatanByID);

module.exports = router;
