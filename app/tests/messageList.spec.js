'use strict';

describe('messageList module', function() {

    beforeEach(module('myApp.chatDetails'));

    describe('messageList directive', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var chatDetailsCtrl = $controller('chatDetailsViewCtrl');
            expect(chatDetailsCtrl).toBeDefined();
        }));

    });
});