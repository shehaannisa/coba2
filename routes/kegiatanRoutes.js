const { Router } = require('express');
const kegiatanController = require('../controllers/kegiatanController');
const router = Router();

router.get('/kegiatan', kegiatanController.getAllKegiatan);
router.get('/kegiatan/:id', kegiatanController.getKegiatanByID);
router.post('/postKegiatan', kegiatanController.uploadKegiatan);
router.delete('/kegiatan/delete/:id', kegiatanController.deleteKegiatanByID);
router.patch("/kegiatan/edit/:id", kegiatanController.updateKegiatanByID);

module.exports = router;
