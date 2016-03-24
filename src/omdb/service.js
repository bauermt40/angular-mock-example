angular.module('omdb', [])
    .factory('omdbApi', function($http, $q) {
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/v=1&';
        service.search = function(query) {
            var deferred = $q.defer();
            
            $http.get(baseUrl + 's=' + encodeURIComponent(query))
            .then(function(response) {
                deferred.resolve(response);
            }, function(err) {
                console.log(err);
            });
            
            return deferred.promise;
        }
        
        return service;
    });