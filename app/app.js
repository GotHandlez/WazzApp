'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngSanitize',
    'ngFileUpload',
    'myApp.chatList',
    'myApp.chatDetails',
    'myApp.version'
]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    // $locationProvider.hashPrefix('!');

    $stateProvider
        .state('chatList', {
            url: "/chat-list",
            templateUrl: "chat-list/chatListView.html",
            controller: 'ChatListViewCtrl'
        })

        .state('chatDetails', {
            url: "/chat-details/:id",
            templateUrl: "chat-details/chatDetailsView.html",
            controller: 'ChatDetailsViewCtrl',
            params: {
                'id': '0',
            }
        });
    
    $urlRouterProvider.otherwise("/chat-list");
}]);
