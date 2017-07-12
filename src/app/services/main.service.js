/**
 * Created by V-XiongXiang on 2017/7/12.
 */
angular.module('services')
    .factory('UpLoadService',['$q','UtilsService','Upload',function ($q,UtilsService,Upload) {
        return {
            UploadFile:function (url,postData){
                let deferred = $q.defer();
                Upload.upload({
                    url:UtilsService.getFileServerIp() + url,
                    data:postData
                }).success(function (data){
                    deferred.resolve(data);
                }).error(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        };
    }]);