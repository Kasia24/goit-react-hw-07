const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();

app.use(express.json());

const BASE_URL = "https://connections-api.goit.global"; // Poprawiony URL API

// Rejestracja użytkownika
router.post("/signup", async (req, res) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error); // Logowanie błędu
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
    console.error(error); // Logowanie błędu
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal server error" });
  }
});

app.use("/api", router); // Użycie routera z prefiksem /api

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
