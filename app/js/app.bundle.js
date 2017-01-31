webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('sampleApp', []);

	__webpack_require__(1);


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

	function CustomerController ($scope) {
	    $scope.tagline = 'Nothing beats a pocket protector!';
	}

	module.exports = CustomerController;




/***/ }
]);