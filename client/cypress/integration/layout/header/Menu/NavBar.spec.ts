describe('Common Interface', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should click first NavBarItem', () => {
    cy.getByContains('NavBarItem').children().first().click()
  })
})
