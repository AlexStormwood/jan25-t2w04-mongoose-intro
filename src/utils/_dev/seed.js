// Code to run that will connect to the database 
// and seed default data in some models

const { dbConnect, dbDisconnect } = require("../database");
const { ArticleModel } = require("../database/ArticleEntity");
const { UserModel } = require("../database/UserEntity");



async function seed(){
	console.log("Seed file starting!");

	await dbConnect();

	// 1. Find a user to use in our seeding
	// simple way:
	// let seedUser = UserModel.findOne({username: "admin"})
	// seedUser = UserModel.findById("698c416e2dacad548b91983f");


	// 2. Make articles that refer to the user from step 1
	// seeded articles all belong to user with ID of 698c416e2dacad548b91983f
	let articlesToSeed = [
		{
			title: [
				{
					language: "en",
					content: "Sample Article 01"
				},
				{
					language: "jp",
					content: "サンプル記事01"
				},
				{
					language: "pt-br",
					content: "Exemplo de Artigo 1"
				}
			],
			body: [
				{
					language: "en",
					content: "Example article 01 body content!"
				}
			],
			author: "698c416e2dacad548b91983f"
			// author: seedUser.id
			// author: seedUser._id
		}
	];

	// way 1: loop through articlesToSeed and make articles one by one
	// way 2: provide the seed data array to model.insertMany and see how it goes

	let seedResult = await ArticleModel.insertMany(articlesToSeed);

	console.log(seedResult);

	// need to call this in our seed file
	// otherwise the file stays "active" forever
	// because it will continue its DB connection
	dbDisconnect();

	console.log("Seed file completing");
}

seed();

