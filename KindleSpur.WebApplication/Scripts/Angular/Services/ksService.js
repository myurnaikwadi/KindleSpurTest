app.factory('authentification', function ($http) {
     return {
         //$http.get('/someUrl', config).then(successCallback, errorCallback);
         //$http.post('/someUrl', data, config).then(successCallback, errorCallback);
        /**
          * @auther : MKN
          * @date : 07/05/2016
          * @Purpose : login function - send credienal to verify details
          */
         login: function (iObj) {
             $http.get('/plateformLogin', iObj.signupObject).then(iObj.successCallBack, iObj.failureCallBack);
         },
         /**
          * @auther : MKN
          * @date : 07/05/2016
          * @Purpose : logout function - reset all data 
          */
         logout: function (iObj) {
             $http.get('/plateformLogout', iObj.signupObject).then(iObj.successCallBack, iObj.failureCallBack);
         },
         /**
          * @auther : MKN
          * @date : 07/05/2016
          * @Purpose : Signup click function - send credienal to verify details
          */
         signup: function (iObj) {
             console.error(iObj)
             $http.get('/plateformSignup', iObj.signupObject).then(iObj.successCallBack,iObj.failureCallBack);
         }
     }
 });