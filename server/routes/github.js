const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/search/repositories?q=topic:ai&sort=stars');
    res.json(response.data.items);
  } catch (err) {
    res.status(500).send('GitHub API error');
  }
});

module.exports = router;
