// app.controller.js

"use strict";

angular
    .module("app.controller", [])
    .controller("AppController", [
        "$scope",
        "$rootScope",
        "AppService",
        function($scope, $rootScope, AppService) {}
    ]);
