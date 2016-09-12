angular.module('devmtnTravel')
.controller('packagesCtrl' , function ($scope , mainSrv) {

  $scope.myData = mainSrv.travelInfo
})
