/**
 * Created by V-XiongXiang on 2017/7/14.
 */
angular.module('main.filter',[])
.filter('statusFilter',[function () {
    return function (isActive) {
        if(isActive==false){
            return "禁用";
        }else{
            return "启用";
        }
    }
}])
.filter('linkFilter',[function () {
    return function (linkType) {
        if(linkType=="text"){
            return "文本";
        }else if(linkType == "image"){
            return "图片";
        }else if(linkType=="link"){
            return "链接"
        }
    }
}])