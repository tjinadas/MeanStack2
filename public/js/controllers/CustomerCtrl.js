'use strict';

function CustomerController ($scope,$http) {
    $scope.tagline = 'Nothing beats a pocket protector!';

    $scope.saveCustomer = function(){
    	$http.post('api/customers',$scope.customer).then(function(response){
    		console.log($scope.customer);
    	});
    };
}

module.exports = CustomerController;


