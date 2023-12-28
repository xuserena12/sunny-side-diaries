const Entry = require("../models/entry");
const asyncHandler = require("express-async-handler");

exports.entries_list = asyncHandler(async (req, res, next) => {
  try {
    const allEntries = await Entry.find({}, "title content date").sort({ title: 1 }).exec();
    res.json(allEntries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
