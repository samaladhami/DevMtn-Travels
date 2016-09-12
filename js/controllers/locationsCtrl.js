angular.module('devmtnTravel').
controller('locationsCtrl' , function ($scope ,mainSrv , $state) {


$scope.myData = mainSrv.travelInfo

$scope.book = function (id) {
  $state.go('booked',{id: id})
}

})
