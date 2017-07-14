/**
 * Created by V-XiongXiang on 2017/7/13.
 */
import bannerImageModal from "../templates/modal-bannerimage-add.html";
import queryBannerModal from "../templates/modal-bannerimage-query.html";
import * as constant from '../constant';

BannerController.$inject = ['$scope','BannerService','toastr','bannerConfig','$uibModal']
function BannerController($scope, BannerService, toastr, bannerConfig,$uibModal){
    // 初始化页面信息
    $scope.viewModel = {
        fontCount: 0,
        tableData: {},
        totalItems:"",
        currentPage:1,
        dropDown: {
            bannerTypes: bannerConfig.bannerTypes,
            imageStatus: bannerConfig.imageStatus
        },
        toolTips: "",
        query: {
            name: "",
            isActive: "",
            linkType: ""
        }
    };

    $scope.init = function(){
        let formData = {
            "name": $scope.viewModel.query.name,
            "colName": "",
            "colValue": $scope.viewModel.query.isActive,
            "colName2": "",
            "colValue2": $scope.viewModel.query.linkType,
            "pageNo": $scope.viewModel.currentPage,
            "pageSize": "8"
        };
        getBannerList(formData);
    }

    /**
     * 获取Banner列表
     * */
    $scope.queryBanner = function () {
        getBannerList(queryBannerData());
    }

    let queryBannerData = function () {
        let formData = {
            "pageNo": $scope.viewModel.currentPage,
            "pageSize": "8"
        };
        if ($scope.viewModel.query.name != "") {
            formData.name = $scope.viewModel.query.name;
        }
        if ($scope.viewModel.query.isActive != "") {
            formData.colName = "is_active";
            formData.colValue = $scope.viewModel.query.isActive;
        }
        if ($scope.viewModel.query.linkType != "") {
            formData.colName2 = "link_type";
            formData.colValue2 = $scope.viewModel.query.linkType;
        }
        return formData;
    }
    
    $scope.pageChanged = function(){
        getBannerList(queryBannerData());
    }

    let getBannerList = function (formData){
        // 初始化列表
        BannerService.getBannerList(formData)
            .then(function (data){
                if (data.body != null && data.responseCode == "10000") {
                    $scope.tableData = data.body;
                    $scope.viewModel.totalItems = 40;  // 返回的总记录数据
                }else{
                    toastr.warning(data.msg);
                }
        });
    }

    let saveBanner = function (type,$scope){
        if ($scope.viewModel.postData.name == ""|| scope.viewModel.postData.name==undefined){
            toastr.error("请填写标题");
            return false;
        }

        let formData = {
            name:$scope.viewModel.postData.name
        };

        // 保存业务逻辑方法
       //  BannerImageService.createBanner(formData,callback)
       //      .then(function (data){
       //          if(data.responseStatus==true&&data.responseCode=="10000"){
       //              toastr.success("保存成功!","Success");
       //              callback();
       //              /* 刷新列表页面*/
       //              $scope.queryBanner();
       //          }
       // });
    }

    // 新建 Banner 图片类型.
    $scope.openBannerImageType = function (){
        $uibModal.open({
            animation: true,
            template: bannerImageModal,
            size: 'ml',
            controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
                $scope.viewModel = {
                    fontCount:0,
                    selectFile:"",
                    imgSrc:"",
                    bannerLinkText:true,
                    labelText:"链接URL",
                    bannerLinkImage:false,
                    pageTitle: "新增广告",
                    dropDown:{
                        linkTypes:[],
                        isActives:[]
                    },
                    postData:{
                        id: "1",
                        name: "",
                        description: "",
                        position:"",
                        isActive: "",
                        linkType: "",
                        linkUrl: "",
                        linkContent: "",
                    }
                };
                $scope.ok = function (file) {
                    saveBanner('add',$scope,function(){
                        $uibModalInstance.close();
                    });
                };
                $scope.cancel = function () {
                    $uibModalInstance.close();
                };
            }]
        });
    };
}
angular.module('controller').controller("BannerController", BannerController)
    .constant('bannerConfig', {
        bannerTypes: [{name: "文本", code: "text"}, {name: "图片", code: "image"}, {name: "链接", code: "link"}],
        imageStatus: [{name: "启用", code: 1}, {name: "禁用", code: 0}]
 });
