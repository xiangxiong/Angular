LoginController.$inject = ['$scope','$window','$state','$log'];
function LoginController($scope,$window,$state,$log){
  $scope.login = function(){
    $state.go('main',{reload: true});
    $window.location.reload();
  }
}
angular.module('controller').controller("LoginController",LoginController);
