const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
    res.send("Hello World!")
})

app.use((req, res, next) => {
    const error = new Error("Not Found!");
    next(error);
})

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json({
        message: error.message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})