var app = angular.module("portfolio", []);

app.controller('charactersController', function($scope) {

  var vm = this;
  vm.character = characters;
  vm.limit = 2;

  $scope.loadMore = function() {
  var increamented = vm.limit + 2;
  vm.limit = increamented > vm.character.length ? vm.character.length : increamented;

 };

});

app.controller('websitesController', function($scope) {

   var vm = this;
   vm.website = websites;
   vm.limit = 2;

   $scope.loadMore = function() {
   var increamented = vm.limit + 2;
   vm.limit = increamented > vm.website.length ? vm.website.length : increamented;

  };

});

app.controller('gamesController', function($scope) {

  var vm = this;
  vm.game = games;
  vm.limit = 2;

  $scope.loadMore = function() {
  var increamented = vm.limit + 2;
  vm.limit = increamented > vm.game.length ? vm.game.length : increamented;

 };

});
