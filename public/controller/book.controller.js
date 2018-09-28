// book.controller.js

"use strict";

angular.module("book.controller", []).controller("BookController", [
    "$scope",
    "$rootScope",
    "$location",
    "BookService",
    "AuthorService",
    function($scope, $rootScope, $location, BookService, AuthorService) {
        $scope.books = [];
        $scope.book = {};

        $scope.authors = [];

        $scope.getBooks = function() {
            BookService.getBooks().then(
                (books) => {
                    $scope.books = books;
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.getBook = function(id) {
            BookService.getBook(id).then(
                (book) => {
                    $scope.book = book;
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.addBook = function() {
            $scope.book.authors = [$scope.book.author];

            BookService.addBook($scope.book).then(
                () => {
                    console.log("Success");
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.updateBook = function() {
            BookService.updateBook(bookId, $scope.book).then(
                () => {
                    console.log("Success");
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        $scope.deleteBook = function(id) {
            BookService.deleteBook(id).then(
                () => {
                    console.log("Success");
                    $scope.getBooks();
                },
                (err) => {
                    console.error(err);
                }
            );
        };

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

        $scope.initializeDom = function() {
            var location = $location.absUrl();

            if (location.includes("/book/add")) {
                $scope.getAuthors();
            } else {
                $scope.getBooks();
            }
        };

        $scope.initializeDom();
    }
]);
