var express = require('express');
var router = express.Router();
const entry_controller = require("../controllers/entryController");

router.get('/history', entry_controller.entries_list);

router.post('/journal', entry_controller.entries_create_post);

// router.get('/history/:id', entry_controller.entry_detail);

module.exports = router;
