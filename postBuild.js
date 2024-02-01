const fs = require('fs')

fs.cpSync('dist', 'demo/static', { recursive: true })
