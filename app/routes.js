var Customers      = require('./models/customermodel');
var path           = require('path');
var express        = require('express');

module.exports = function(app) {

	    // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        var router = express.Router(); 

        router.use(function(req, res, next) {
            // do logging
            console.log('Something is happening.');
            next(); // make sure we go to the next routes and don't stop here
        });   

        router.route('/customers')

        .post(function(req, res) {
        
            console.log('adding a new customer');
            console.log(req.body);

            // use mongoose to add a new customer
            var customer = new Customers();
            customer.firstName = req.body.firstName
            customer.lastName = req.body.firstName
            customer.save(function (err, customer) {
                if (err)
                    res.send(err);
                
                res.json(customer); // return all customers in JSON format
            })
        
        })

        .get(function(req, res) {

            console.log('fetching customer data');
            // use mongoose to get all customers in the database
            Customers.find(function(err, customers) {

                if (err)
                    res.send(err);

                res.json(customers); 
            });

               
        });

        app.use('/api', router);


        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, "./index.html"));
        });

};



	