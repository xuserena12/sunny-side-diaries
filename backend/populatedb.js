#! /usr/bin/env node

// use to populate sample data
// node populatedb [mongodb url]

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Entry = require("./models/entry");

const entries = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createEntries();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function entryCreate(index, title, content, date) {
  const entry = new Entry({
     title: title,
     content: content,
     date: date
  });
  await entry.save();
  entries[index] = entry;
  console.log(`Added entry: ${title}`);
}

async function createEntries() {
  console.log("Adding entries");
  await Promise.all([
    entryCreate(0, 'One', 'content1', new Date('2023-12-31')),
    entryCreate(0, 'Two', 'content2', new Date('2023-12-31')),
  ]);
}