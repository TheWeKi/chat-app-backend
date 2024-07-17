import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (_req, res) => {
    return res.json({
        status: "running",
    })
});

import userRouter from "./routes/user.route.js";
app.use("/user", userRouter);

export default app;