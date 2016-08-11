angular.module('myApp')
    .directive('messageDetails', function($stateParams, messageDataService) {
        return {
            restrict: "EA",
            templateUrl: 'directives/messageDetails.html',

            link: function(scope, element, attrs, ctrl) {
                var element = angular.element(element);
                scope.identity = messageDataService.getIdentity();
                scope.todos =  messageDataService.getMessageDetailFor($stateParams.id);
                scope.membersInvolved = Array.from((new Set(scope.todos.map(function(item) {
                    return item.who;
                })))).toString().split(",").join(", ");
            }
        };
    });