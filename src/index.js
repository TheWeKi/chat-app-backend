import app from './app.js';

const PORT = process.env.PORT || 8080;

app.get('/', (_req, res) => {
    return res.json({
        status: "running",
    });
});

// socket io connection

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});