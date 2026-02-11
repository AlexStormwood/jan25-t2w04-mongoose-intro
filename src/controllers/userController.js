const express = require("express");
const { UserModel } = require("../utils/database/UserEntity");
const router = express.Router();



// Login route 


// Register route 


// Create route 
// localhost:3000/users/
router.post("/", async (request, response) => {
	console.log("Making a new user!");

	let result = await UserModel.create({username: request.body.username});

	response.json({
		message: "User create operation completed.",
		data: result
	});
});


// Read route 
// :variableName = dynamic route parameter
// localhost:3000/users/1234
// param is request.params.variableName
// request.params.variableName has a value of 1234

// localhost:3000/users/id/698c416e2dacad548b91983f/
// localhost:3000/users/id/:userId
// localhost:3000/users/id/alex
router.get("/id/:userId", async (request, response) => {
	console.log("Someone is trying to view data about the user with the ID of " + request.params.userId);

	let result = await UserModel.findById(request.params.userId);

	response.json({
		message:"User findById operation completed.",
		params: request.params,
		result: result
	});
});

// localhost:3000/users/username/alex
router.get("/username/:username", async (request, response) => {
	console.log("Someone is trying to view data about the user with the username of " + request.params.username);

	let result = await UserModel.findOne({username: request.params.username})

	response.json({
		message:"User findOne operation completed.",
		params: request.params,
		result: result
	});
});

// Update route


// Delete route 


// Named exports within an object
// module.exports = {
// 	router
// }

// Unnamed or "default" exports
module.exports = router;