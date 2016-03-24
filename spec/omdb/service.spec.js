describe('omdb service', function() {
    var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"342","imdbID":"tt0251413","Type":"game","Response":"True"};
    
    var omdbApi = {};
    var $httpBackend;

    beforeEach(module('omni'));

    beforeEach(inject(function(_omdbApi_, _$httpBackend_) {
        omdbApi = _omdbApi_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return search movie data', function() {
        var response;
        
        $httpBackend.when('GET', 'http://www.omdbapi.com/v=1&s=star%20wars')
            .responsd(200, movieData);
        
        omdbApi.search('star wars')
            .then(function(data) {
            response = data;
        });
        
        $httpBackend.flush();
        
        expect(response).toEqual(movieData);
    });
});