angular.module('myApp')
    .directive('messageList', function(messageDataService, $state) {
    return {
        restrict: "EA",
        templateUrl: 'directives/messageList.html',
        link: function(scope, element, attrs, ctrl) {
            var element = angular.element(element)

            scope.getChatMessages = function(id) {
                $state.go('chatDetails', {id: id});
            }

            scope.todos =  messageDataService.getMessageList().todos.map(function(item) {
                item.notes = item.notes.length > 100 ? item.notes.slice(0,100) + "..." : item.notes;
                item.who = item.who.length > 25 ? item.who.slice(0,25) + "..." : item.who;
                return item;
            });
        }
    };
});