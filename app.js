const express = require("express");

const app = express();
const PORT = process.env.PORT || "5000";

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
app.get("/*", (req, res) => {
  res.sendFile("./templates/index.html", { root: __dirname });
});
