const express = require('express');
const app = express();

app.get("/api", (req, res) => {
  res.json({ "users": ["userone", "usertwo"]});
});

app.listen(5000, () => {
  console.log("Server start on port 5000!");
});
