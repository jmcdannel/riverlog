'use strict';

describe('Directive: rlVideo', function () {

  // load the directive's module
  beforeEach(module('riverlogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rl-video></rl-video>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rlVideo directive');
  }));
});
