const express = require('express');
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
	res.send("Hey There!");
});

app.listen(3000, () => {
	console.log("server started at port specified");
});
