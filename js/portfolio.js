var app = angular.module("portfolio", []);

app.controller('worksController', function($scope) {

  var vm = this;
  vm.work = works;
  vm.limit = works.length;

  $scope.loadMore = function() {
  var increamented = vm.limit + works.length;
  vm.limit = increamented > vm.work.length ? vm.work.length : increamented;

 };

});

$( document ).ready(function() {
    var numberofworks = ( works.length * 440 ) + 240 ;
    $(".works").css({'width': numberofworks + 'px'});
});
