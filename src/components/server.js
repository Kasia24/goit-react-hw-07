require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Importowanie tras
const authRoutes = require("./routes/auth");
const contactsRoutes = require("./routes/contacts");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Trasy
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactsRoutes);

// Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
