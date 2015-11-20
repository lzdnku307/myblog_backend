/**
 *test func
 * @authors lizude (lizude@innobuddy.com)
 * @date    2015-11-20 13:40:49
 */

'use strict';

//引用
let chai = require('chai');
let expect = chai.expect;
let should = chai.should();
global._ = require('lodash');
require('../src/common/func');

//测试func
describe('test func', function() {
  //测试随机字符串
  describe('test _.randomString', function() {
    //不传递参数
    it('should return a string and string length is 32 when not pass an argument!', function() {
      let str = _.randomString();
      str.should.be.a('string');
      str.should.have.length(32);
    });

    //传递一个参数
    it('should return a string and string length is equal to 64 when  pass an argument of 64!', function() {
      let str = _.randomString(64);
      str.should.be.a('string');
      str.should.have.length(64);
    });

    //传递非整数参数
    it('should return a string and string length is 32 when pass an argument which type is not int!', function() {
      let str = _.randomString();
      str.should.be.a('string');
      str.should.have.length(32);
    });

  });

  //测试md5
  describe('test _.md5', function() {
    let seed = 'Admin123';
    //加密
    it('should return a string and string should not equal to seed!', function() {
      let str = _.md5(seed);
      str.should.be.a('string');
      str.should.not.be.equal(seed);
    });

  });

  //测试驼峰函数
  describe('test _.toCamle', function() {
    it('should return \'getData\' when pass \'get_data\'', function() {
      let str = _.toCamel('get_data');
      str.should.be.equal('getData');
    });

    it('should return \'getClassStudents\' when pass \'get_class_students\'', function() {
      let str = _.toCamel('get_class_students');
      str.should.be.equal('getClassStudents');
    });
  });

});
