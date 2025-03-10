import { runApp } from '../app/examples'

// Treeselect is available via the link in the index.html file (treeselectjs.umd.js)
const Treeselect = globalThis.Treeselect

if (!Treeselect) {
  throw new Error('Treeselect is not available. Make sure you have included the script in the index.html file')
}

runApp(Treeselect)
