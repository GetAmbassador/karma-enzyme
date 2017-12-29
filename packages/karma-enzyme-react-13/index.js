var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files, preprocessors) {
  var filename = path.join(__dirname, 'adapter.js');
  files.unshift(pattern(filename));
  preprocessors[filename] = ['webpack'];
};

framework.$inject = ['config.files', 'config.preprocessors'];
module.exports = {'framework:enzyme-react-13': ['factory', framework]};
