describe('ReconStatusCtrl', function(){
    it('should have 3 entries', function(){
        var scope = {},
            ctrl = new ReconStatusCtrl(scope);
        expect(scope.reconStatusList.length).toBe(3);
    });
});