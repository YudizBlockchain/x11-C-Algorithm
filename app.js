var shell = require('shelljs');


//npm  i shelljs
 
// Run external tool synchronously
if (shell.exec(' npm init -y ').code !== 0) {
  shell.echo('Error: Failed Command :  npm init -y ');
  shell.exit(1);
}

if (shell.exec('npm install nan node-gyp --save ').code !== 0) {
  shell.echo('Error: Failed Command  npm install nan node-gyp --save ');
  shell.exit(1);
}

if (shell.exec('node-gyp rebuild').code !== 0) {
  shell.echo('Error:Failed Command node-gyp rebuild ');
  shell.exit(1);
}

if (shell.exec('node x11-call.js ').code !== 0) {
  shell.echo('Error: Failed command :node x11-call.js ');
  shell.exit(1);
}
