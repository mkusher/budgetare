var app = jest.genMockFn().mockImpl(function(){
    this.run = jest.genMockFn();
});

module.exports = app;
