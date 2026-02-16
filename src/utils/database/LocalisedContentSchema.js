const { default: mongoose } = require("mongoose");

const LocalisedContentSchema = new mongoose.Schema({
	language: {
		type: String,
		default: "en"
	},
	content: {
		type: String,
		required: true
	}
});

module.exports = {
	LocalisedContentSchema
}