const express = require("express");
const axios = require("axios");
const router = express.Router();

const BASE_URL = "https://connections-api.goit.global";

// Pobierz wszystkie kontakty
router.get("/", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const response = await axios.get(`${BASE_URL}/contacts`, {
      headers: { Authorization: token },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal server error" });
  }
});

// Dodaj nowy kontakt
router.post("/", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, req.body, {
      headers: { Authorization: token },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal server error" });
  }
});

// Usuń kontakt
router.delete("/:id", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const response = await axios.delete(
      `${BASE_URL}/contacts/${req.params.id}`,
      {
        headers: { Authorization: token },
      }
    );
    res.status(response.status).json({ message: "Contact deleted" });
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal server error" });
  }
});

module.exports = router;
