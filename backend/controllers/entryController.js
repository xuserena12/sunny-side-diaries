const Entry = require("../models/entry");
const asyncHandler = require("express-async-handler");

exports.entries_list = asyncHandler(async (req, res, next) => {

  try {
    const userId = req.query.userId;
    const allEntries = await Entry.find({ userId }, "title content date").sort({ date: -1 }).exec();
    res.status(201).json(allEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


exports.entries_create_post = asyncHandler(async (req, res, next) => {
  try {
    const { title, content, date, userId } = req.body;

    const newEntry = new Entry({
      title: title,
      content: content,
      date: date,
      userId: userId,
    });

    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Display detail page for a specific journal entry
// exports.entry_detail = asyncHandler(async (req, res, next) => {
//   try {
//     const entryID = req.params.id;
//     const entry = await Entry.findbyId(entryID, "title content date").exec();
//     res.status(201).json(entry);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });