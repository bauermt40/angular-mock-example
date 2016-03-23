describe('omdb service', function() {
   it('should return search movie data', function() {
        var omniApi = {};
        
        angular.mock.module('omni');
        
        angular.mock.inject(function(_omniApi_) {
            omniApi = _omniApi_;
        });
        
        expect(service.search('star wars')).toBe(movieData);
    });
});