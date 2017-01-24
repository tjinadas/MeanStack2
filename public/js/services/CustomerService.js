angular.module('CustomerService', []).factory('Customer', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/customers');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new customer
        create : function(customerData) {
            return $http.post('/api/customers', customerData);
        },

        // call to DELETE a customer
        delete : function(id) {
            return $http.delete('/api/customers/' + id);
        }
    }       

}]);