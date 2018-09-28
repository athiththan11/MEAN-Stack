// book.service.js

"use strict";

angular.module("book.service", []).factory("BookService", [
    "$http",
    "$q",
    function($http, $q) {
        const api = "/api/books/";

        return {
            getBooks: function() {
                var defer = $q.defer();

                $http.get(api).then(
                    (results) => {
                        defer.resolve(results.data);
                    },
                    (err) => {
                        defer.reject(err);
                    }
                );

                return defer.promise;
            },

            getBook: function(id) {
                var defer = $q.defer();

                $http.get(api + id).then(
                    (results) => {
                        defer.resolve(results.data);
                    },
                    (err) => {
                        defer.reject(err);
                    }
                );

                return defer.promise;
            },

            addBook: function(book) {
                var defer = $q.defer();

                $http({
                    method: "post",
                    url: api,
                    data: book,
                    headers: { "Content-Type": "application/json" }
                }).then(
                    (results) => {
                        defer.resolve(results.data);
                    },
                    (err) => {
                        defer.reject(err);
                    }
                );

                return defer.promise;
            },

            updateBook: function(id, book) {
                var defer = $q.defer();

                $http({
                    method: "put",
                    url: api + id,
                    data: book,
                    headers: { "Content-Type": "application/json" }
                }).then(
                    (results) => {
                        defer.resolve(results.data);
                    },
                    (err) => {
                        defer.reject(err);
                    }
                );

                return defer.promise;
            },

            deleteBook: function(id) {
                var defer = $q.defer();

                $http({
                    method: "delete",
                    url: api,
                    data: { book: id },
                    headers: { "Content-Type": "application/json" }
                }).then(
                    (results) => {
                        defer.resolve(results.data);
                    },
                    (err) => {
                        defer.reject(err);
                    }
                );

                return defer.promise;
            }
        };
    }
]);
