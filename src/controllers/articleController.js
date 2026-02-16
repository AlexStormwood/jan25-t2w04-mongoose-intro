const express = require("express");
const { ArticleModel } = require("../utils/database/ArticleEntity");
const { UserModel } = require("../utils/database/UserEntity");
const router = express.Router();

// Get ALL articles in the system
// localhost:3000/articles/
router.get("/", async (request, response) => {
	// find({}) is a shortcut for getting all data from the collection
	let result = await ArticleModel.find({}).populate("author");

	response.json({
		message: "All articles retrieved!",
		data: result
	});
});


// localhost:3000/articles/author/alexh
router.get("/author/:authorname", async (request, response) => {
	// 1. find the user with the matching username
	let foundUser = await UserModel.findOne({username: request.params.authorname});

	// 2. find all articles where author id = found user id 
	let foundArticles = await ArticleModel.find({author: foundUser.id});


	// Search by nested field 
	// only works for subdocuments for now!
	// let foundArticles = await ArticleModel.find({'author.username': request.params.authorname});

	// 3. return the results 
	response.json({
		message: "Found all articles written by user " + request.params.authorname,
		data: foundArticles
	});

});






// module.exports = {router: router} // No! Not this syntax!
// Default export syntax instead:
module.exports = router;