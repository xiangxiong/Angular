export default function config($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider){
  // $locationProvider.html5Mode(false).hashPrefix('');
  $httpProvider.interceptors.push('HttpInterceptor');

  let loginState = {
    name:'login',
    url:'/login',
    template:require('./login.html'),
    controller:'LoginController'
  };
  let mainState = {
    name:'main',
    url:'/main',
    template:require('./main.html'),
    controller:'MainController'
  };
  let bannerState = {
    name:'banner',
    url:'/banner',
    template:require('./views/banner.html'),
    controller:'BannerController'
  };
  $stateProvider.state("login",loginState);
  $stateProvider.state("main",mainState);
  $stateProvider.state("banner",bannerState);
  $urlRouterProvider.otherwise("/login");
};

config.$inject =['$stateProvider','$urlRouterProvider','$locationProvider','$httpProvider']