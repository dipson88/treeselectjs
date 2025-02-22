import { renderTreeselect, getTagsElements } from '../../helpers'
import { TagsSortItem } from './../../../../src/treeselectTypes'

const { brighton, chelsea, paris } = {
  chelsea: { value: 1, name: 'Chelsea' },
  brighton: { value: 2, name: 'Brighton' },
  paris: { value: 3, name: 'Paris' }
}

const mixedOptions = [
  { value: paris.value, name: paris.name, children: [] },
  { value: brighton.value, name: brighton.name, children: [] },
  { value: chelsea.value, name: chelsea.name, children: [] }
]

describe('tagsSortFn prop', () => {
  it('should use sorting by options list by default', () => {
    const treeselect = renderTreeselect({
      value: [paris.value, brighton.value, chelsea.value],
      options: mixedOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    const sortedNamesByOptions = mixedOptions.map(({ name }) => name)

    sortedNamesByOptions.forEach((name, index) => {
      expect(tagsElements[index].innerHTML).toContain(name)
    })
  })

  it('should sort tags by name', () => {
    const sortNodesByName = (a: TagsSortItem, b: TagsSortItem) => a.name.localeCompare(b.name)

    const treeselect = renderTreeselect({
      value: [paris.value, brighton.value, chelsea.value],
      tagsSortFn: sortNodesByName,
      options: mixedOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    const sortedNamesByName = mixedOptions.toSorted(sortNodesByName)

    sortedNamesByName.forEach(({ name }, index) => {
      expect(tagsElements[index].innerHTML).toContain(name)
    })
  })

  it('should sort tags by value', () => {
    const sortNodesByValue = (a: TagsSortItem, b: TagsSortItem) => {
      const aValue = parseFloat(a.value.toString())
      const bValue = parseFloat(b.value.toString())

      const isAValueNumber = !isNaN(aValue)
      const isBValueNumber = !isNaN(bValue)

      if (isAValueNumber && isBValueNumber) {
        return aValue - bValue
      }

      if (!isAValueNumber && !isBValueNumber) {
        return a.value.toString().localeCompare(b.value.toString())
      }

      return isAValueNumber ? -1 : 1
    }

    const treeselect = renderTreeselect({
      value: [paris.value, brighton.value, chelsea.value],
      options: mixedOptions,
      tagsSortFn: sortNodesByValue
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    const sortedNamesByValue = mixedOptions.toSorted(sortNodesByValue)

    sortedNamesByValue.forEach(({ name }, index) => {
      expect(tagsElements[index].innerHTML).toContain(name)
    })
  })

  it('should sort tags by order', () => {
    const value: (number | string)[] = [paris.value, chelsea.value, brighton.value]
    const sortNodesByOrder = (a: TagsSortItem, b: TagsSortItem) => {
      const orderMap = new Map(value.map((id, index) => [id.toString(), index]))
      const indexA = orderMap.get(a.value.toString()) ?? Infinity
      const indexB = orderMap.get(b.value.toString()) ?? Infinity

      return indexA - indexB
    }
    const treeselect = renderTreeselect({
      value,
      tagsSortFn: sortNodesByOrder,
      options: mixedOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    const sortedNamesByOrder = mixedOptions.toSorted(sortNodesByOrder)

    sortedNamesByOrder.forEach(({ name }, index) => {
      expect(tagsElements[index].innerHTML).toContain(name)
    })
  })

  it('should sort tags by order during the update', () => {
    let value: (number | string)[] = []
    const sortNodesByOrder = (a: TagsSortItem, b: TagsSortItem) => {
      const orderMap = new Map(value.map((id, index) => [id.toString(), index]))
      const indexA = orderMap.get(a.value.toString()) ?? Infinity
      const indexB = orderMap.get(b.value.toString()) ?? Infinity

      return indexA - indexB
    }

    const treeselect = renderTreeselect({
      value: [],
      tagsSortFn: sortNodesByOrder,
      options: mixedOptions
    })

    value = [paris.value]
    treeselect.updateValue(value)
    const tagsElements1 = getTagsElements(treeselect.parentHtmlContainer) ?? []
    expect(tagsElements1[0].innerHTML).toContain(paris.name)

    value = [paris.value, chelsea.value]
    treeselect.updateValue(value)
    const tagsElements2 = getTagsElements(treeselect.parentHtmlContainer) ?? []
    expect(tagsElements2[0].innerHTML).toContain(paris.name)
    expect(tagsElements2[1].innerHTML).toContain(chelsea.name)

    value = [paris.value, chelsea.value, brighton.value]
    treeselect.updateValue(value)
    const tagsElements3 = getTagsElements(treeselect.parentHtmlContainer) ?? []
    expect(tagsElements3[0].innerHTML).toContain(paris.name)
    expect(tagsElements3[1].innerHTML).toContain(chelsea.name)
    expect(tagsElements3[2].innerHTML).toContain(brighton.name)
  })
})
