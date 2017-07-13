export default function config($stateProvider,$urlRouterProvider,$locationProvider){
  // $locationProvider.html5Mode(false).hashPrefix('');
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
  let userState = {
    name:'user',
    url:'/user',
    template:require('./views/userlist.html'),
    controller:'UserController'
  };
  let bannerState = {
    name:'banner',
    url:'/banner',
    template:require('./views/banner.html'),
    controller:'BannerController'
  };
  $stateProvider.state("login",loginState);
  $stateProvider.state("main",mainState);
  $stateProvider.state("user",userState);
  $stateProvider.state("banner",bannerState);
  $urlRouterProvider.otherwise("/login");
};
