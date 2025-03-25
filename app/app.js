import '../src/treeselectjs.css'
import Treeselect from '../src/treeselectjs'

import { runDefaultExample } from './examples/default.js'
import { runSlotExample } from './examples/slot.js'
import { runDisabledExample } from './examples/disabled.js'
import { runSingleSelectExample } from './examples/singleSelect.js'
import { runIndependentNodesExample } from './examples/independentNodes.js'
import { runIconsExample } from './examples/icons.js'

const runApp = (Treeselect) => {
  runDefaultExample(Treeselect)
  runSlotExample(Treeselect)
  runDisabledExample(Treeselect)
  runSingleSelectExample(Treeselect)
  runIndependentNodesExample(Treeselect)
  runIconsExample(Treeselect)

  document.body.classList.add('loaded')
}

runApp(Treeselect)
