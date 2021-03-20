const express = require("express");
const blogRouter = require("./routes/blog");
const mongoose = require("mongoose");

const app = express();
const HOST = "192.168.31.126"; //192.168.31.126
const PORT = process.env.PORT || "5000"; //80 is web default
const dbURI =
  "mongodb+srv://freeuser:12345@cluster0.jhjbg.mongodb.net/my_node_db?retryWrites=true&w=majority";

async function connectDbAndStartServer(PORT = 5000, HOST = "localhost", dbURI) {
  try {
    //connect to mongodb
    const response = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongodb...");
    //start the server
    app.listen(
      PORT,
      /*HOST,*/ () => {
        console.log(`Server is listening on http://${HOST}:${PORT}/`);
      }
    );
  } catch (error) {
    console.log("Something is wrong!");
    console.log(error);
  }
}

connectDbAndStartServer(PORT, HOST, dbURI);

//middleware
app.use(express.urlencoded({ extended: true })); //enable POST req from forms
app.use(express.json()); //enable body decoding from requests
app.use(express.static("public")); //make the folder public, which meens it can be accsessed like a file explorer from browser

app.use(blogRouter);

app.get("/*", function (req, res) {
  res.sendFile("./templates/index.html", { root: __dirname });
});

//Representational state transfer
