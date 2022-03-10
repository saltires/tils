// const { test, expect } = require('jest')
const pluginTranArrow = require('../lib');

// TODO: Implement module test
const babelCore = require('@babel/core');
const babelTypes = require('@babel/types');

const source = `
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  play() {
    console.log('playing')
  }

  qishi = '1'

  static saltire = 'hihi'
}
`;

const result = babelCore.transform(source, {
  plugins: [pluginTranArrow],
});

console.log(result.code);

test('测试转换结果', () => {
  expect(result.code).toMatch(/Person.saltire = 'hihi'/);
  expect(result.code).toMatch(/Person.prototype.play/);
});
