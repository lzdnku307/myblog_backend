/**
 *
 * @authors lizude (lizude@innobuddy.com)
 * @date    2015-11-20 11:38:52
 */

'use strict';

if(process.argv.length == 2 && process.argv[1] === 'sync') {
  require('./src/common/sync');
}
else {
  require('./src/common/server');
}
