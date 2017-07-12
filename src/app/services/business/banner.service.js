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

}

angular.module('services').service('UserService',UserService);
