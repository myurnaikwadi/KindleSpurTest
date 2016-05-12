app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('login');
	$stateProvider	
	.state('login', {
		url: '/login',
		templateUrl: '/User/Login',
		controller: 'UserController'
	})
	.state('home', {
		url: '/home',
		templateUrl: '/stateParent/stateParent',
		controller : 'stateParentController'
	})
}]);
