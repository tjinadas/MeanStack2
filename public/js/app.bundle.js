webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('sampleApp', ['ngRoute', 'appRoutes']);

	__webpack_require__(1);
	__webpack_require__(6);

	angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	    $routeProvider

	    // home page
	        .when('/', {
	            templateUrl: 'views/home.html',
	            controller: 'MainController'
	        })

	        // nerds page that will use the NerdController
	        .when('/customers', {
	            templateUrl: 'views/customers.html',
	            controller: 'CustomerController'
	        });

	    $locationProvider.html5Mode(true);

	}]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Thanuj on 1/27/2017.
	 */

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('sampleApp').controller('MainController', __webpack_require__(4));
	angular.module('sampleApp').controller('CustomerController', __webpack_require__(5));



/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';

	function MainController($scope){
	    $scope.tagline = 'To the moon and back!';
	}

	module.exports = MainController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	function CustomerController ($scope,$http) {
	    $scope.tagline = 'Nothing beats a pocket protector!';

	    $scope.saveCustomer = function(){
	    	$http.post('api/customers',$scope.customer).then(function(response){
	    		console.log($scope.customer);
	    	});
	    };

	    $http({
		    method: 'GET',
		    url: '/api/customers'
	    })
	    .then(function(response) {
	        console.log("recived the data", response);
	        $scope.customerset = response.data;
	    });




	}

	module.exports = CustomerController;




/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by Thanuj on 1/29/2017.
	 */


/***/ }
]);