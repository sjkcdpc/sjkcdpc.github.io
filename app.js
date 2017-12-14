var forever = require('hexo');
var child = forever.start([ 'hexo', 's'], {
  max : 1,
  silent : true
});