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
    }])
    .factory('HttpInterceptor',['$q',function ($q){
        var interceptor = {
            request:function (config) {
                // 成功的请求方法
                return config;
            },
            response:function (response) {
                // 响应成功
                return response;
            },
            requestError:function (rejection) {
                // 请求发生了错误，如果能从错误中恢复,可以返回一个新的请求或promise
                return rejection;
            },
            responseError:function (rejection) {
                // 请求发生了错误,如果能从错误中恢复，可以返回一个新的响应或promise
                return rejection;
            }
        };
        return interceptor;
    }]);