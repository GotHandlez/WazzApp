angular.module('myApp')
    .service('messageDataService', [function () {
        var svc = this;
        var imagePath = '64.svg';

        svc.identity = "Edwin Teh";
        svc.identityImage = '0_' + imagePath;

        svc.getIdentity = function() {
            return svc.identity;
        }

        svc.getIdentityImage = function() {
            return svc.identityImage;
        }
        
        svc.getMessageList = function() {
            return svc.messageListValues;
        };

        svc.getMessageDetailFor = function(id) {
            return svc.messageDetailValues[id];
        };
        
        svc.addMessageDetailFor = function(id, message) {
            svc.messageDetailValues[id].push(message);
        };
        
        svc.updateChatList = function(id, message) {
            for(var i = 0; i < svc.messageListValues.todos.length; i++) {
                if(svc.messageListValues.todos[i].id === id) {
                    svc.messageListValues.todos[i].when = message.when;
                    svc.messageListValues.todos[i].who = message.who;
                    svc.messageListValues.todos[i].notes = message.notes;
                    break;
                }
            }
        }
        
        svc.messageDetailValues = {
            '1': [
                {
                    face: '0_' + imagePath,
                    who: 'Edwin Teh',
                    when: 1470808913656,
                    notes: "laksdjflsadjflkdsafjldksfj",
                },
                {
                    face: '3_' + imagePath,
                    who: 'Vincent Teh',
                    when: 1470808913656,
                    notes: "Do you want me to leave half?",
                }
            ],
            '2':[
                {
                    face: '0_' + imagePath,
                    who: 'Edwin Teh',
                    when: 1470808913656,
                    notes: "Et ligula pede vivamus tincidunt eget purus. Nostrum pede duis purus justo, et et lectus aenean orci luctus pede, sed metus nulla dictum dolor massa, etiam gravida.",
                },
                {
                    face: '1_' + imagePath,
                    who: 'Stephen Ku',
                    when: 1470808913656,
                    notes: "Et ligula pede vivamus tincidunt eget purus. Nostrum pede duis purus justo, et et lectus aenean orci luctus pede, sed metus nulla dictum dolor massa, etiam gravida.",
                },
                {
                    face: '2_' + imagePath,
                    who: 'Issac Pao',
                    when: 1470808913656,
                    notes: "Et eget quisque tempor et odio, nulla rhoncus aliquet, amet malesuada mauris quisque. Vitae nascetur proin auctor phasellus sed eros, at dolor proin",
                },
                {
                    face: '4_' + imagePath,
                    who: 'Raph Lim',
                    when: 1470808913656,
                    notes: "Elit arcu. Voluptatem lobortis ut curabitur et non, porta risus ac enim amet. Aliquam et porta mi habitasse eget, turpis amet mauris a, semper sapien amet ultricies mauris magna sed",
                },
            ],
        };
        
        svc.messageListValues = {
            todos: [
                {
                    face: '0_' + imagePath,
                    who: ' Edwin Teh, Vincent Teh',
                    when: 1470808913656,
                    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    id: '1'
                },
                {
                    face: '1_' + imagePath,
                    who: 'Edwin Teh, Stephen Ku, Issac Pao, Raph Lim',
                    when: 1470808913656,
                    notes: "He looks NOTHING like me.",
                    id: '2'
                },
                {
                    face: '2_' + imagePath,
                    who: 'Edwin Teh, Issac Pao',
                    when: 1470808913656,
                    notes: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    id: '3'
                },
                {
                    face: '3_' + imagePath,
                    who: 'Edwin Teh, Stephen Ku',
                    when: 1470808913656,
                    notes: "Do you want me to leave half?",
                    id: '4'
                },
                {
                    face: '4_' + imagePath,
                    who: 'Edwin Teh, Raph Lim',
                    when: 1470808913656,
                    notes: "oh cool wow thx",
                    id:'5'
                },
                {
                    face: '5_' + imagePath,
                    who: 'Edwin Teh, Daniel Pao',
                    when: 1470808913656,
                    notes: "I have a rumbly in my tumbly",
                    id:'5'
                },
                {
                    face: '6_' + imagePath,
                    who: 'Edwin Teh, Anonymous',
                    when: 1470808913656,
                    notes: "Lorem ipsum dolor sit amet, facilisi ultricies pede diam et vivamus sodales. Phasellus adipiscing mauris turpis donec et. Vel nisl vel non eu neque, ante diam, quia volutpat porttitor dolor. Dui ornare risus donec etiam, dui ipsum incidunt hendrerit at at. Neque vivamus, dui quas sit ante ligula luctus. Quam fusce aliquet elit velit, ipsum velit nunc natoque. Non fringilla est turpis nunc, ut sit justo curabitur porta, volutpat in lacus dapibus vitae gravida ligula. Nulla facilisi",
                    id:'5'
                },
                {
                    face: '7_' + imagePath,
                    who: 'Edwin Teh, Michael Jordan',
                    when: 1470808913656,
                    notes: "Non nisl varius eu ante arcu suspendisse, vitae sapien lectus ut in purus elementum, id sed, suspendisse dolor cras posuere. Tortor id facilisi ultrices, quis sociosqu cursus. ",
                    id:'5'
                }
            ]
        };

        return svc;

    }]);