'use strict';

describe('myApp.chat-list module', function() {

  beforeEach(module('myApp.chatList'));

  describe('chat-list controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var chatListCtrl = $controller('chatListViewCtrl');
      expect(chatListCtrl).toBeDefined();
    }));

  });
});