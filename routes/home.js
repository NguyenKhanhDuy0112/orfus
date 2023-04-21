const express = require("express");
const router = express.Router();
import { getOrfus } from '../controllers/orfusController.js';

router.get("/", async (req, res, next) => {
  return getOrfus
});

module.exports = router;
