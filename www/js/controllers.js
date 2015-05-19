angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('CltCtrl', function($scope) {
     $scope.totalBuyPrice= function() {
       var totComp = Math.ceil(($scope.buy_unit_price * $scope.buy_units));
        return totComp;
     };
     $scope.totalSellPrice= function() {
       var totComp = Math.ceil(($scope.sell_unit_price * $scope.sell_units));
        return totComp;
     };
     $scope.totalBrokerage= function() {
       var totComp = Math.ceil(($scope.sell_unit_price * $scope.sell_units)*$scope.brokerage);
        return totComp;
     };
     $scope.calculate = function() {

    };
})
;
