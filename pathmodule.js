const path = require('node:path');

const a1 = path.basename('C:\\temp\\myfile.html'); // Returns: 'myfile.html'
const a2 = path.dirname('/foo/bar/baz/asdf/quux'); // Returns: '/foo/bar/baz/asdf'
const a3 = path.extname(__filename); // Returns: extention of file
console.log(a1);
console.log(a2);
console.log(__filename, a3);