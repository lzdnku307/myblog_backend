/**
 *func
 * @authors lizude (lizude@innobuddy.com)
 * @date    2015-11-20 11:48:40
 */

'use strict';

//引用
let crypto = require('crypto');

/* 随机字符串
** @param {[int]}     len
** @return {string}
*/
_.randomString = function(len) {
  let seed = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  len = parseInt(len, 10) || 32;
  let str = '';

  //生成指定长度的随机字符串
  for(let i = 0; i < len; i++) {
    str += seed[parseInt(Math.random() * 62, 10)];
  }

  //返回
  return str;
};

/* md5
** @param {string} seed
** @return {string}
**
*/
_.md5 = function(seed) {
  return crypto.createHash('md5').update(seed).digest('hex');
};

/* 转换成驼峰命名
** @param {string} str 要转换的字符串
** @return {string}
**
*/
_.toCamel = function(str) {
  let arr = str.split('_');

  //将_的第一个字符变为大写
  for(let i = 1; i < arr.length; i++) {
    if(!arr[i]) {
      continue;
    }
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  //返回
  return arr.join('');
};

/**
 * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
 Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
_.dateFormat = function(fmt,d) {
  let date = new Date(d);
  let o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  let week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}
