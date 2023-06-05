import Treeselect from '../dist/treeselectjs.mjs'
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
