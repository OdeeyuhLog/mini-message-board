const express = require("express");
const path = require("path");
const messageRoutes = require("./src/routes/messageRoutes");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", messageRoutes);

app.use((req, res) => {
	res.status(404).send("Page not found");
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
