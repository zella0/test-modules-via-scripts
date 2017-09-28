const pkg = require('../package')
const expect = require('chai').expect

describe('package.json scripts', function () {
  it('should have installed the cowsay package as a dependency', function () {
    const actual = pkg.dependencies
    expect(actual, 'You must install the package as a dependency').to.be.ok
    expect(actual.cowsay, 'You must install the cowsay package as a dependency').to.be.ok
  })

  it('should have a script that will run the cowsay function', function () {
    const actual = pkg.scripts
    expect(actual, 'You require a scripts key in the package.json').to.be.ok
    expect(actual.cowsay, 'Call your script cowsay').to.be.ok

    const expected = 'cowsay'
    expect(actual.cowsay, 'The value of the cowsay script should simply be cowsay').to.equal(expected)
  })
})
