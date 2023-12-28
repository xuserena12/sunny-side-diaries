const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content : {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

EntrySchema.virtual("url").get(function () {
  return `/entry/${this._id}`;
});

// Export model
module.exports = mongoose.model("Entry", EntrySchema);