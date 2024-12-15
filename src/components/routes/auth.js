const express = require("express");
const axios = require("axios");
const router = express.Router();

const BASE_URL = "https://connections-api.goit.global";

// Rejestracja użytkownika
router.post("/signup", async (req, res) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal server error" });
  }
});

// Logowanie użytkownika
router.post("/login", async (req, res) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal server error" });
  }
});

module.exports = router;
