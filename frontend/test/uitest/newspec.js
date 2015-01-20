describe('New ad page', function() {

    beforeEach(function() {
       browser.get('http://localhost:9001/#/new');
    });

    it('Should have form', function() {
      var form = element(by.tagName('form'));
      expect(form).toBeDefined();
    });

    it('Should have text fields conntected to the model', function() {

      expect(element(by.model('ad.title')).getTagName()).toEqual('input');
      expect(element(by.model('ad.price')).getTagName()).toEqual('input');
      expect(element(by.model('ad.description')).getTagName()).toEqual('textarea');
    });



});