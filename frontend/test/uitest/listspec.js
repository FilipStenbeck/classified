describe('Classified page', function() {


  describe('list page', function() {

    beforeEach(function() {
       browser.get('http://localhost:9001/#/list');
    });

    it('Should have a title', function() {
      expect(browser.getTitle()).toEqual('Classified');
    });

    it('Should list ads', function() {
      var ads = element.all(by.repeater('ad in ads'));
      expect(ads.count()).toEqual(13);
    });

    it('Should use the filter field', function() {
      var filterTextField, ads;
      filterTextField= element(by.model('search'));
      filterTextField.sendKeys('filip');
      ads = element.all(by.repeater('ad in ads'));

      expect(ads.count()).toEqual(4);
    });

    it('Should have an new add button', function() {
      var button = element(by.css('.btn-primary'));

      expect(button).toBeDefined();
      expect(button.getText()).toEqual('New ad');
      expect(button.isEnabled()).toBe(true);
      expect(button.isDisplayed()).toBe(true);
    });

    it('should be posiible to get to the new ad screen', function() {
      var button = element(by.css('.btn-primary'));
      button.click();
      expect(browser.getCurrentUrl()).toContain('/new');
    });
  });
});

