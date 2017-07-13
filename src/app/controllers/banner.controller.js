/**
 * Created by V-XiongXiang on 2017/7/13.
 */
BannerController.$inject = ['$scope', 'BannerService', 'toastr', 'bannerConfig','$uibModal']
function BannerController($scope, BannerService, toastr, bannerConfig,$uibModal){

    let pageSize = 10,pageNo =1;

    // 初始化页面信息
    $scope.viewModel = {
        fontCount: 0,
        tableData: {},
        templateUrl: toolTipModal,
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

    $scope.init = function () {
        let formData = {
            "name": $scope.viewModel.query.name,
            "colName": "",
            "colValue": $scope.viewModel.query.isActive,
            "colName2": "",
            "colValue2": $scope.viewModel.query.linkType,
            "pageNo": "1",
            "pageSize": "10"
        };
        getBannerList(formData);
    }

    /**
     * 获取Banner列表
     * */
    $scope.queryBanner = function () {
        let formData = {
            "pageNo": "1",
            "pageSize": "10"
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
        getBannerList(formData);
    }

    let getBannerList = function (formData) {
        // 初始化列表
        BannerService.getBannerList(formData)
            .then(function (data){
                if (data.body != null && data.responseCode == "10000") {
                    $scope.tableData = data.body;
                }else{
                    toastr.warning(data.msg);
                }
        });
    }

    getBannerImageList(pageNo,pageSize,true);

    let getBannerImageList = function (no,size){
        let formData = {
            "pageNo":no,
            "pageSize":size
        };
        if($scope.viewModel.query.name!="")
        {
            formData.name = $scope.viewModel.query.name;
        }
        if($scope.viewModel.query.isActive!=""){
            formData.colName = "is_active";
            formData.colValue =$scope.viewModel.query.isActive;
        }
        if($scope.viewModel.query.linkType!=""){
            formData.colName2 = "link_type";
            formData.colValue2=$scope.viewModel.query.linkType;
        }

        BannerService.getBannerList(formData)
            .then(function(data){
                if(data.body!=null&&data.responseCode=="10000"){
                    $scope.tableData = data.body;
                }
            });
    }

    // 新建 Banner 图片类型.
    $scope.openBannerImageType = function (size){
        $uibModal.open({
            animation: true,
            template: bannerImageModal,
            size: size,
            controller: ['$scope', '$uibModalInstance','UpLoadService', function ($scope, $uibModalInstance,UpLoadService) {
                $scope.viewModel = {
                    fontCount:0,
                    selectFile:"",
                    imgSrc:"",
                    bannerLinkText:true,
                    labelText:"链接URL",
                    bannerLinkImage:false,
                    pageTitle: "新增Banner图片",
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

                $scope.uploadFiles = function (file){
                    uploadFiles(file,$scope);
                };

                $scope.init = function(){
                }
                $scope.ok = function (file) {
                    saveBannerImageType('add',$scope,file,function(){
                        $uibModalInstance.close();
                    });
                };
                $scope.settleModeChange = function () {
                    settleModeChange($scope);
                }
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
