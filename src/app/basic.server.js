/**
 * 基础服务
 * $http.get,$http.head,$http.post,$http.put,$http.delete,$http.jsonp,$http.patch
 * */
function UtilsService($http,$q){
    return {
        getIp:function () {
            return "http://172.29.20.30:8080/";
        },
        getFileServerIp:function(){
            return "http://172.16.4.130:9000/";
        },
        query:function (sUrl,sData,sMethod="post") {
            return $http({
                headers:{'apiKey':"opc"},
                url:sUrl,
                data:sData,
                cache:false,
                method:sMethod,
                ignoreLoadingBar:false
            });
        },
        downLoad:function (url){
            return $http({
                headers:{'apiKey':"opc"},
                method:"GET",
                url:url,
                responseType:'arraybuffer'
            });
        },
        get:function (url,data) {
            return $http({
                url:url,
                data:data,
                cache:false,
                method:"GET",
                ingoreLoadingBar:false
            });
        },
        post:function (url,data) {
            return $http({
                headers: {'apiKey': "opc"},
                url: url,
                data: data,
                cache: false,
                method: "POST",
                ignoreLoadingBar: false
            })
        },
        postBlob:function (url,data) {
            return $http({
                headers:{'apiKey':"opc"},
                url:url,
                data:data,
                cache:false,
                method:"POST",
                ignoreLoadingBar:false,
                responseType:'blob'
            });
        },
        put:function (url,data) {
            return $http({
                headers:{'apiKey':"opc"},
                url:url,
                data:data,
                cache:false,
                method:"PUT",
                ignoreLoadingBar:false
            });
        },
        delete:function (url,data) {
            return $http({
                headers:{'apiKey':"opc"},
                url:url,
                data:data,
                method:"DELETE",
                ignoreLoadingBar:false
            });
        },
        querySync:function (url,data,method){

            method ? method : method = "post";

            // 声明延后执行,表示要去监控后面的执行
            var deferred = $q.defer();
            $http({
                url:url,
                data:data,
                cache:false,
                method:method,
                ignoreLoadingBar:false
            })
            .success(function (data,status,headers,config){
                deferred.resolve(data);
             })
             .error(function(data,status,headers,config){
                 deferred.reject(data);
             });

            return deferred.promise;
        },
        $get:function (url) {
            return $http.get(url,{headers:{'apiKey':"opc"}});
        },
        $post:function (url,data) {
            return $http.post(url,data,{headers:{'apiKey':"opc"}})
        },
        $put:function (url) {
            return $http.put(url,{headers:{'apiKey':"opc"}});
        },
        $delete:function (url) {
            return $http.delete(url,{headers:{'apiKey':"opc"}})
        }
    };
}

UtilsService.$inject = ['$http','$q'];

export default UtilsService;