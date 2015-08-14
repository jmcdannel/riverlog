'use strict';

describe('Service: rlRivers', function () {

  // load the service's module
  beforeEach(module('riverlogApp'));

  // instantiate service
  var rlRivers;
  beforeEach(inject(function (_rlRivers_) {
    rlRivers = _rlRivers_;
  }));

  it('should do something', function () {
    expect(!!rlRivers).toBe(true);
  });

});
