const fs = require('fs')

fs.cpSync('dist', 'docs/static', { recursive: true })
