const express = require("express");
const Banner = require("../models/banner");
const MovieDetail = require("../models/movieDetail");

const router = express.Router();

router.get("/banner", async (req, res) => {
  try {
    const banners = await Banner.findAll();
    return res.status(200).json(banners);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});

router.get("/detail/:movieId", async (req, res) => {
  try {
    const { movieId } = req.params;
    if (movieId) {
      const movieDetail = await MovieDetail.findOne({
        where: {
          id: movieId,
        },
      });
      return res.status(200).json(movieDetail);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});

module.exports = router;
