// Model and schema 
// export them from this file 

const mongoose = require('mongoose');

// 1. Make the schema of the DB entity 
const UserSchema = new mongoose.Schema({
	// Basic schema property declaration:
	// username: String, 
	// Thorough schema property declaration:
	username: {
		type: String,
		required: true,
		unique: true,
		default: "Bananas!"
	}
});

// 2. Make a model of the DB entity that uses the schema 
const UserModel = mongoose.model("User", UserSchema);

// 3. Export the schema and model 
module.exports = {
	UserSchema,
	UserModel
}