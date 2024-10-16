describe('Treeselect Component', () => {
  const selector = '.treeselect-demo-default'
  const i = {
    England: '1',
    London: '2',
    Chelsea: '3',
    'West End': '4',
    Brighton: '5',
    France: '6',
    Paris: '7',
    Lyon: '8'
  }
  beforeEach(() => {
    cy.visit('/')
  })

  it('Page Loads Correctly', () => {
    cy.contains('Treeselect JS Demo').should('be.visible')
  })

  it('Shows the default values', () => {
    cy.shouldHaveExactSelectedItems(selector, [i['West End'], i['France']])
  })

  it('Opens and closes the dropdown', () => {
    cy.openTreeselectList(selector)
    cy.get(selector).find('.treeselect-list').should('be.visible')
    cy.closeTreeselectList(selector)
    cy.get(selector).find('.treeselect-list').should('not.exist')
  })

  it('Can clear all items', () => {
    cy.clearAll(selector)
    cy.getSelectedItems(selector).should('have.length', 0)
  })

  it('Filters items based on search', () => {
    cy.getTreeselect(selector).click().type('Chelsea')
    cy.get('.treeselect-list__item:not(.treeselect-list__item--hidden)').should('have.length', 3)
    cy.contains('.treeselect-list__item-label', 'Chelsea').should('be.visible')
  })

  it('When checking a child element and all childrens are marked it should mark the parent as selected', () => {
    cy.openTreeselectList(selector)
    cy.selectItem(selector, [i['England'], i['London'], i['Chelsea']])
    cy.shouldHaveExactSelectedItems(selector, [i['London'], i['France']])
  })

  it('Can successfully uncheck nested element', () => {
    cy.openTreeselectList(selector)
    cy.unselectItem(selector, [i['England'], i['London'], i['West End']])
    cy.shouldHaveExactSelectedItems(selector, [i['France']])
  })

  it('Can successfully uncheck top level element', () => {
    cy.openTreeselectList(selector)
    cy.unselectItem(selector, [i['France']])
    cy.shouldHaveExactSelectedItems(selector, [i['West End']])
  })

  // Uncomment and adjust these tests as needed
  // it('allows removing the first item', () => {
  //   cy.getSelectedItems(selector).first().find('.treeselect-input__tags-element-close').click()
  //   cy.getSelectedItems(selector).should('have.length', 1)
  // })

  // it('selects a nested item', () => {
  //   cy.selectNestedItem(selector, ['England', 'London', 'Chelsea'])
  //   cy.getSelectedItems(selector).should('include', '4')
  // })
})
