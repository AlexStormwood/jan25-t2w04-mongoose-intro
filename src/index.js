// Import the app
const {app} = require("./server");
const { dbConnect } = require("./utils/database");


// Get the PORT environment variable 
const PORT = process.env.PORT || 3000;


// Run the server 
// app.listen(PORT, () => {
// 	// callback that runs when the server has successfully started
// 	console.log(`Server is running on http://localhost:${PORT}`);
// });

// Connect to the database 
dbConnect().then(() => {
	app.listen(PORT, () => {
		// callback that runs when the server has successfully started
		console.log(`Server is running on http://localhost:${PORT}`);
	});
}).catch((error) => {
	console.log(error);
});



// thingOne().then(() => {
// 	thingTwo()
// })

