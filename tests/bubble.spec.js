/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const bubbleSort = require('../bubbleSort.js');

describe('bubbleSort', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function');
  });

  it('should sort the array from smallest to biggest', () => {
    expect(bubbleSort([4, 6, 9, 2, 1])).to.deep.equal([1, 2, 4, 6, 9]);
  });
});
