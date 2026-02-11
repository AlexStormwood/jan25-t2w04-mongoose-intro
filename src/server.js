// Create and configure the server 
// so it can be exported and used by other tools 

const express = require("express");
const app = express();

// middleware!
// this allows JSON data to come in on ANY request
// so we can receive JSON body data in our POST/etc routes!
app.use(express.json());

app.get("/", (request, response) => {
	response.json({
		message:"Hello, world!"
	});
});

// This import syntax when module.exports is an object
// const { router: userRouter } = require("./controllers/userController");
// This import syntax when module.exports is a default-only export
const userRouter = require("./controllers/userController");
app.use("/users", userRouter);

module.exports = {
	app
}