import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());

app.get("/api/v1", (req, res) => {
  return res.status(200).json({ ok: true, message: "Welcome!" });
});

app.get("/api/v1/places", async (req, res) => {
  try {
    const places = await prisma.place.findMany();
    return res.status(200).json({ ok: true, data: places });
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
