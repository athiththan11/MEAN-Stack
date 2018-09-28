// app.routes.js

"use strict";

angular.module("appRoutes", []).config([
    "$routeProvider",
    "$locationProvider",
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "view/home.html",
                controller: "AppController"
            })
            .when("/books", {
                templateUrl: "view/book/home.html",
                controller: "BookController"
            })
            .when("/books/add", {
                templateUrl: "view/book/add.html",
                controller: "BookController"
            })
            .when("/authors", {
                templateUrl: "view/author/home.html",
                controller: "AuthorController"
            })
            .when("/authors/add", {
                templateUrl: "view/author/add.html",
                controller: "AuthorController"
            })
            .when("/authors/edit/:id", {
                templateUrl: "view/author/edit.html",
                controller: "AuthorController"
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    }
]);
