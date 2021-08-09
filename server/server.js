const express = require("express");
const path = require("path");
const app = express();

// Init Middleware
app.use(express.json({ extend: false }));

app.use(express.static(path.join(__dirname, "../client/build")));

// Serve React Build
app.get("*", (req, res) => {
	return res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server Listening on Port ${PORT}`);
});
