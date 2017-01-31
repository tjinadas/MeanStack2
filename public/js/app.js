angular.module('sampleApp', ['ngRoute', 'appRoutes']);

require('./controllers');
require('./services');

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