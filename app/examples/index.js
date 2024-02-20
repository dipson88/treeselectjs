import { runDefaultExample } from './default'
import { runSlotExample } from './slot'
import { runDisabledExample } from './disabled'
import { runSingleSelectExample } from './singleSelect'
import { runIndependentNodesExample } from './independentNodes'
import { runIconsExample } from './icons'
import { runNoGroupsExample } from './noGroups'

export const runApp = (Treeselect) => {
  runDefaultExample(Treeselect)
  runSlotExample(Treeselect)
  runDisabledExample(Treeselect)
  runSingleSelectExample(Treeselect)
  runIndependentNodesExample(Treeselect)
  runIconsExample(Treeselect)
  runNoGroupsExample(Treeselect)
}
