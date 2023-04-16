import { runDefaultExample } from './default'
import { runSlotExample } from './slot'
import { runDisabledExample } from './disabled'
import { runSingleSelectExample } from './singleSelect'

export const runApp = (Treeselect) => {
  runDefaultExample(Treeselect)
  runSlotExample(Treeselect)
  runDisabledExample(Treeselect)
  runSingleSelectExample(Treeselect)
}
