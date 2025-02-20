// Treeselect is available via the link in the index.html file (treeselectjs.umd.js)
const Treeselect = globalThis.Treeselect

if (!Treeselect) {
  throw new Error('Treeselect is not available. Make sure you have included the script in the index.html file')
}

import { runDefaultExample } from '../app/examples/default.js'
import { runSlotExample } from '../app/examples/slot.js'
import { runDisabledExample } from '../app/examples/disabled.js'
import { runSingleSelectExample } from '../app/examples/singleSelect.js'
import { runIndependentNodesExample } from '../app/examples/independentNodes.js'
import { runIconsExample } from '../app/examples/icons.js'

const runDemo = (Treeselect) => {
  runDefaultExample(Treeselect)
  runSlotExample(Treeselect)
  runDisabledExample(Treeselect)
  runSingleSelectExample(Treeselect)
  runIndependentNodesExample(Treeselect)
  runIconsExample(Treeselect)
}

runDemo(Treeselect)
