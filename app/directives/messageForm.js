angular.module('myApp').directive('messageForm', function ($stateParams, messageDataService, $timeout, Upload) {
    return {
        restrict: "EA",
        templateUrl: 'directives/messageForm.html',
        scope: {},
        controller: function ($scope, $element) {
            $scope.sendMessage = function () {
                if ($scope.message && $scope.message.trim() || $scope.file) {
                    var messageObj = {
                        face: messageDataService.getIdentityImage(),
                        who: 'Edwin Teh',
                        when: new Date().getTime(),
                        notes: $scope.message || ""
                    }

                    if($scope.file) {
                        messageObj.image = $scope.file;
                        $scope.submit();
                    }

                    messageDataService.addMessageDetailFor($stateParams.id, messageObj);
                    messageDataService.updateChatList($stateParams.id, messageObj);
                    clearForm();
                    scrollToBottom();
                }
            }

            $scope.removeImage = function() {
                $scope.file = null;
            }

            // upload later on form submit or something similar
            $scope.submit = function() {
                if ($scope.file) {
                    $scope.upload($scope.file);
                }
            };

            // upload on file select or drop
            $scope.upload = function (file) {
                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {file: file}
                }).then(function (resp) {
                    console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                }, function (resp) {
                    console.log('Error status: ' + resp.status);
                }, function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                });
            };

            function scrollToBottom() {
                $timeout(function () {
                    $element[0].parentNode.parentNode.scrollTop = $element[0].parentNode.parentNode.scrollHeight;
                });
            }

            function clearForm() {
                $scope.message = "";
                $scope.file = null;
            }
        }
    };
});