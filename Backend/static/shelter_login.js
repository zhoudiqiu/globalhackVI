var app=angular.module('shelter_login', []);
app.controller('shelterLoginCtrl', function($http, $scope){
    $scope.user = {
      "isShelter" : "1"
    };
   
    $scope.try_login = function() {
    $http.post('http://localhost:8000/auth/login', $scope.user)
      .then(
        //login success
        function(response){
          console.log(response.data);
        },
        //login fail
        function(){
          console.log("send failure");
        }
    );
  }

  
});