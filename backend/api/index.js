import express from "express";

const app = express();
app.use(express.json());

// Hello world
app.get("/api/v1", async (_req, res) => {
  res.send("Hello world!");
});

const router = express.Router();

app.listen(3000, () => console.log("Server berhasil dijalankan."));
