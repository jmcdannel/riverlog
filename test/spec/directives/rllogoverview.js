'use strict';

describe('Directive: rlLogOverview', function () {

  // load the directive's module
  beforeEach(module('riverlogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rl-log-overview></rl-log-overview>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rlLogOverview directive');
  }));
});
