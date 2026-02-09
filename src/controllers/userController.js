const express = require("express");
const { UserModel } = require("../utils/database/UserEntity");
const router = express.Router();



// Login route 


// Register route 


// Create route 


// Read route 
router.get("/:userId", async (request, response) => {
	console.log("Someone is trying to view data about the user with the ID of " + request.params.userId);

	let result = await UserModel.findById(request.params.userId);

	response.json({
		message:"Not yet implemented!",
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