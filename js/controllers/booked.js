angular.module('devmtnTravel').
controller('bookedCtrl' , function ($scope ,mainSrv , $stateParams) {

   $scope.id = $stateParams
   $scope.place = mainSrv.getPlace($stateParams)

})
