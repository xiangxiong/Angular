export default class UserController{

      constructor($scope,$uibModal,UserService)
      {
          UserService.getUsers().then(function(response) {
              $scope.users = response.data
          });

          $scope.modalDialog = function(){
              $uibModal.open({
                  animation: true,
                  ariaLabelledBy: 'modal-title-top',
                  ariaDescribedBy: 'modal-body-top',
                  templateUrl: '../src/app/templates/modalcontent.html',
                  size: 'lg',
                  controller: function($scope,$uibModalInstance) {
                      $scope.name = 'top';

                      $scope.ok = function () {
                           $uibModalInstance.close();
                      };

                      $scope.cancel = function () {
                          $uibModalInstance.close();
                      };
                  }
              });
          };
      }
}

angular.module('controller').controller("UserController",UserController);
