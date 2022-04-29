const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./config/database");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const MovieDetail = require("./models/movieDetail");
const NowShowing = require("./models/nowShowing");
const ComingSoon = require("./models/comingSoon");

// swagger ui document
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// dotenv setting
dotenv.config();

// cors
const corsConfig = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
};
app.use(cors(corsConfig));

// multiple routes
app.use("/auth", require("./routes/auth"));
app.use("/movies", require("./routes/movies"));

// test db
db.authenticate()
  .then(() => console.log("**********DB connected"))
  .catch((err) => console.log("!!!!!!!!!Database error" + err));

//sync model
// db.sync({alter:true})
// Banner.sync({alter:true})
// MovieDetail.sync()
// NowShowing.sync({ alter: true });
// ComingSoon.sync({alter:true});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${process.env.PORT}`);
});
