const path = require('path');

// outputs the default separator for current system.
console.log('separator: ', path.sep);

// outputs the normalised path
const filepath = path.join('/modules', 'README.md');
console.log('filepath: ', filepath);

// outputs the basename
const base = path.basename(filepath);
console.log('base: ', base);

// outputs the obsolute path
const absolutePath = path.resolve(__dirname, 'modules', 'README.md');
console.log(absolutePath);
