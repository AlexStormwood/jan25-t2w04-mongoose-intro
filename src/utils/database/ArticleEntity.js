const mongoose = require("mongoose");
const { LocalisedContentSchema } = require("./LocalisedContentSchema");

// schemaVariable = new mongoose.Schema(fields, options)
const ArticleSchema = new mongoose.Schema(
	// fields
	{
		title: {
			type: [LocalisedContentSchema],
			required: true
		},
		body: {
			type: [LocalisedContentSchema],
			require: true
		},
		// someUser.id - string version 
		// someUser._id - ObjectID version 
		// article has one author
		// users  can be author to many articles 
		author: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true
		},
		// sillyAuthorId: {
		// 	type: String,
		// 	required: true
		// }
		// someArticle.sillyAuthorId = "someUserIdhere"
		// User.findOneById(someArticle.sillyAuthorId);
	},
	// options
	{
		timestamps: true
		// createdAt, and updatedAt automatically come from timestamps 
	}
);


const ArticleModel = mongoose.model("Article", ArticleSchema);

module.exports = {
	ArticleSchema,
	ArticleModel
}





