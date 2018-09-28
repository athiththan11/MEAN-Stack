// author.controller.js

"use strict";

angular.module("author.controller", []).controller("AuthorController", [
    "$scope",
    "$rootScope",
    "$location",
    "$routeParams",
    "AuthorService",
    function($scope, $rootScope, $location, $routeParams, AuthorService) {
        // extract route params
        var authorId = $routeParams.id;

        $scope.authors = [];
        $scope.author = {};

        $scope.getAuthors = function() {
            AuthorService.getAuthors().then(
                (authors) => {
                    $scope.authors = authors;
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.getAuthor = function(id) {
            AuthorService.getAuthor(id).then(
                (author) => {
                    $scope.author = author;
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.addAuthor = function() {
            AuthorService.addAuthor($scope.author).then(
                () => {
                    console.log("Success");
                    $location.path("/author");
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.updateAuthor = function() {
            AuthorService.updateAuthor(authorId, $scope.author).then(
                () => {
                    console.log("Success");
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.deleteAuthor = function(id) {
            AuthorService.deleteAuthor(id).then(
                () => {
                    console.log("Success");
                    $scope.getAuthors();
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.initializeDom = function() {
            if (authorId) {
                $scope.getAuthor(authorId);
            } else {
                $scope.getAuthors();
            }
        };

        $scope.initializeDom();
    }
]);
