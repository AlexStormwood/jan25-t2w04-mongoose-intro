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
router.patch("/id/:userId", async (request, response) => {
	// 1. find the target user 
	let targetUser = await UserModel.findById(request.params.userId);
	console.log(targetUser);
	// 2. update the target user 
	// One property at a time to give room for validation, e.g.
	// if (request.body.username == some profanity){cancel the update}
	targetUser.username = request.body.username;

	// Update all properties based on data provided from the request
	// in bulk, no validation, just go for it
	// targetUser = {...targetUser, ...request.body};
	// console.log("-----");
	console.log(targetUser);
	await targetUser.save();

	// 3. return the updated user data 
	response.json({
		message:"User update operation completed!",
		data: targetUser
	});

});


// Delete route 
router.delete("/id/:userId", async (request, response) => {
	// Search for user by ID and delete them in one fell swoop!
	await UserModel.deleteOne({id: request.params.userId});

	// let resultAlternateWay = await UserModel.findByIdAndDelete(request.params.userId);

	response.json({
		message: "User delete operation completed.",
		data: request.params.userId
	});
});


// Named exports within an object
// module.exports = {
// 	router
// }

// Unnamed or "default" exports
module.exports = router;