import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send(
		"<h1>Node Express App</h1> <h4>Hello World from Node & Express CI-CD!</h4> <p>Version 1.0</p>"
	);
});

app.get("/work", (req, res) => {
	res.send("<h3>Work is going good</h3>");
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server listening on port: ${port}`);
});