UserController.$inject = ['$scope']
function UserController($scope){
  console.log("UserController");
}
angular.module('controller').controller("UserController",UserController);
