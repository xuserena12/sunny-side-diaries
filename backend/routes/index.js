var express = require('express');
var router = express.Router();

const entry_controller = require("../controllers/entryController");


router.get('/history', entry_controller.entries_list);



module.exports = router;