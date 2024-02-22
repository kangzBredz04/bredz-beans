import express from "express";

import coffeesRouter from "./routes/coffes.js";

const app = express();
// middleware untuk membaca body
app.use(express.json());

// Hello world
app.get("/api/v1", async (_req, res) => {
  res.send("Hello world!");
});

// membuat route (dengan objek Router)
const router = express.Router();

// router untuk coffees
router.use("/coffees", coffeesRouter);

// router utama
app.use("/api", router);

app.listen(3000, () => console.log("Server berhasil dijalankan."));
