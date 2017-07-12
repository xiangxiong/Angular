import angular from 'angular';
import './controllers';
import './directives';
import './services';
import uiRouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';
import appConfig from './config';
let homeModule = angular.module('app',['ui.router','controller','directives','services','ui.bootstrap'])
homeModule.config(appConfig);
