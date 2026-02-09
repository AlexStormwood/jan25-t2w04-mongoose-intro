const express = require("express");
const router = express.Router();



// Login route 


// Register route 


// Create route 


// Read route 
router.get("/:userId", (request, response) => {
	console.log("Someone is trying to view data about the user with the ID of " + request.params.userId);

	response.json({
		message:"Not yet implemented!",
		params: request.params
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