import {BaseApiMethod,BaseService} from './business.service';

class ApiMethod extends BaseApiMethod{
    // create banner
    createBanner(data){
        return this.post("BANNER_CREATE",data);
    }
    // update banner
    modifyBanner(data){
        return this.post("BANNER_UPDATE",data);
    }
    // delete banner
    deleteBanner(id){
        return this.get("BANNER_DELETE_BY_ID","/"+id);
    }
    // get from list
    getBannerList(data){
        return this.post("GET_BANNER_LIST",data);
    }
}

class BannerService extends BaseService{
    constructor(UtilsService) {
        super();
        this.api = new ApiMethod(UtilsService);
    }
    createBanner(data){
        return this.api.createBanner(data);
    }
    modifyBanner(data){
        return this.api.modifyBanner(data);
    }
    deleteBanner(data){
        return this.api.deleteBanner(data);
    }
    getBannerList(data){
        return this.api.getBannerList(data);
    }
}

angular.module('biz-services').factory('BannerService',["UtilsService",function(UtilsService) {
    return new BannerService(UtilsService);
}])