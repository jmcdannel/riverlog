'use strict';

describe('Directive: rlRiver', function () {

  // load the directive's module
  beforeEach(module('riverlogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rl-river></rl-river>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rlRiver directive');
  }));
});
