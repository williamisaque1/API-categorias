import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
const app = express();
app.use(express.json());
app.use("/categories", categoriesRoutes);
console.log("hh");
app.listen(3333, () => console.log("server iniciado na porta 3333"));
