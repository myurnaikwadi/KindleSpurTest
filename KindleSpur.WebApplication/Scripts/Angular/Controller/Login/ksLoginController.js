/**
     * @auther : MKN
     * @date : 07/05/2016
     * @Purpose : login and Signup controller - Manage all data related to  login and signup page
     */
 app.controller('loginController', ['$scope', '$state', 'authentification', function ($scope, $state, authentification) {
 	console.error('login Page loaded Successfully');
 	$scope.loginDetails = {};
     /**
     * @auther : MKN
     * @date : 07/05/2016
     * @Purpose : success callback after successful login
     */
 	var _successCallBack = function (iObj) {
 	    console.error('In _successCallBack');
 	    $state.go('home');
 	};
     /**
      * @auther : MKN
      * @date : 07/05/2016
      * @Purpose : failure callback  - don't do anything if user enter wrong credienal in system
      */
 	var _failureCallBack = function (iObj) {
 	    console.error('In _failureCallBack');
 	    $state.go('login');
 	};
 
 
     /**
      * @auther : MKN
      * @date : 07/05/2016
      * @Purpose : signup function  - send data to auth factory to send data to server.
      */
 	$scope.loginClick = function () {
 	    var _object = {
 	        firstName: $scope.loginDetails.firstName,
 	        lastName: $scope.loginDetails.lastName,
 	    }
 	    console.error(_object)
	    authentification.login({ signupObject: _object, successCallBack: _successCallBack, failureCallBack: _failureCallBack });
 	};
     /**
      * @auther : MKN
      * @date : 07/05/2016
      * @Purpose : signup function  - send data to auth factory to send data to server.
      */
 	$scope.signupClick = function () {
 	    var _object = {
 	        firstName: $scope.loginDetails.firstName,
 	        lastName: $scope.loginDetails.lastName,
 	        emailAddress: $scope.loginDetails.emailAddress,
 	        password: $scope.loginDetails.password,
 	        mobileNumber: $scope.loginDetails.mobileNumber,
 	    }
 	    console.error(_object)
 	    authentification.signup({ signupObject: _object, successCallBack: _successCallBack, failureCallBack: _failureCallBack });
 	};
     /**
      * @auther : MKN
      * @date : 07/05/2016
      * @Purpose : signup function  - send data to auth factory to send data to server.
      */
 	$scope.signupClick = function () {
 		var _object = {
 			firstName : $scope.loginDetails.firstName,
 			lastName : $scope.loginDetails.lastName,
 			emailAddress : $scope.loginDetails.emailAddress,
 			password : $scope.loginDetails.password,
 			mobileNumber : $scope.loginDetails.mobileNumber,
 		}
 		console.error(_object)
 		authentification.signup({ signupObject: _object, successCallBack: _successCallBack, failureCallBack: _failureCallBack });
 	};
}])