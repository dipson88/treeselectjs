import { runDefaultExample } from './default'
import { runDisabledExample } from './disabled'
import { runIconsExample } from './icons'
import { runIndependentNodesExample } from './independentNodes'
import { runSingleSelectExample } from './singleSelect'
import { runSlotExample } from './slot'

export const runApp = (Treeselect) => {
  runDefaultExample(Treeselect)
  runSlotExample(Treeselect)
  runDisabledExample(Treeselect)
  runSingleSelectExample(Treeselect)
  runIndependentNodesExample(Treeselect)
  runIconsExample(Treeselect)

  document.body.classList.add('loaded')
}
