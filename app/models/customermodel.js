// grab the mongoose module
var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema();

customerSchema = {
	id: String,
	firstName: String,
	lastName: Number,
}

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model("Customer",customerSchema);


