// author.service.js

"use strict";

angular.module("author.service", []).factory("AuthorService", [
    "$http",
    "$q",
    function($http, $q) {
        const api = "/api/authors/";

        return {
            getAuthors: function() {
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

            getAuthor: function(id) {
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

            addAuthor: function(author) {
                var defer = $q.defer();

                $http({
                    method: "post",
                    url: api,
                    data: author,
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

            updateAuthor: function(id, author) {
                var defer = $q.defer();

                $http({
                    method: "put",
                    url: api + id,
                    data: author,
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

            deleteAuthor: function(id) {
                var defer = $q.defer();

                $http({
                    method: "delete",
                    url: api,
                    data: { author: id },
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
