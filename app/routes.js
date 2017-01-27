var Customers = require('./models/customermodel');
var path = require('path');

module.exports = function(app) {

	    // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        app.get('/api/customers', function(req, res) {

        	// use mongoose to get all customers in the database
            Customers.find(function(err, customers) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(customers); // return all customers in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, "./index.html")); 
        });

};



	