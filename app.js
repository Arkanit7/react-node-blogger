const express = require("express");
const blogRouter = require("./routes/blog");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || "80"; //80 is web default
const dbURI =
  "mongodb+srv://freeuser:12345@cluster0.jhjbg.mongodb.net/my_node_db?retryWrites=true&w=majority";

async function connectDbAndStartServer(PORT = 5000, dbURI) {
  try {
    //connect to mongodb
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(response);
    console.log("Connected to Mongodb...");
    //start the server
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}...`);
    });
  } catch (error) {
    console.log("Something is wrong!");
    console.log(error);
  }
}

connectDbAndStartServer(PORT, dbURI);

//middleware
app.use(express.urlencoded({ extended: true })); //enable POST req from forms
app.use(express.json()); //enable body decoding from requests
app.use(express.static("public")); //make the folder public, which meens it can be accsessed like a file explorer from browser

app.use(blogRouter);

app.get("/*", (req, res) => {
  res.sendFile("./templates/index.html", { root: __dirname });
});

//Representational state transfer
