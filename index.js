import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import pageRoutes from "./routes/pages.js";
import contentRoutes from "./routes/contents.js";
import componentsRoutes from "./routes/components.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/pages", pageRoutes);
app.use("/contents", contentRoutes);
app.use("/components", componentsRoutes);

const CONNECTION_URL =
  "mongodb+srv://oscarbustos:oscarbustos123@cluster0.rh0hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
