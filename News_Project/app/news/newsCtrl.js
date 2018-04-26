(function () {
  "use strict";
  angular.module("newsWikiApp").controller("NewsCtrl", NewsCtrl);

  function NewsCtrl($scope) {
    $scope.mensaje = "Probando el scope de Angular Js";
  }
}());
