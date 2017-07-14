import angular from 'angular';
import './controllers';
import './directives';
import './services';
import  './filter/main.filter';
import uiRouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';
import toastr from 'angular-toastr';
import UtilsService from './basic.server';
import '../styles/bootstrap.min14ed.css';
import '../styles/font-awesome.min93e3.css';
import '../styles/animate.min.css';
import '../styles/style.min862f.css';
import '../styles/app.css';

import appConfig from './config';
let homeModule = angular.module('app',['ui.router','toastr','controller','directives','services','ui.bootstrap','main.filter','angular-ui-pagination'])

homeModule.factory('UtilsService',UtilsService);
homeModule.config(appConfig);
