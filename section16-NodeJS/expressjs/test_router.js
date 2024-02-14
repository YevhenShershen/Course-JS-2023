const express = require('express');
const router = express.Router()

const app = express();

router.get("/", (req, res)=> {
  res.status(200).send("/test route - Hello world!")
})

module.exports = router;