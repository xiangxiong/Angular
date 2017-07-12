function MainController($scope,$location){
  $scope.exit = function(){
    $location.path("/login");
  }
}
angular.module('controller').controller("MainController",MainController);
