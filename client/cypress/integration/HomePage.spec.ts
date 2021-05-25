describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('basket showcase', () => {
    const waitTime = 1500
    let subBtnId = 'subscribeSendBtn'
    const sizes = [
      [1920, 1080],
      [1599, 1000],
      [1270, 1000],
      [959, 1000],
      [719, 1000],
    ]
    sizes.forEach((size) => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.document()
        .then((doc) => {
          return doc.documentElement.getBoundingClientRect()
        })
        .then((viewportRect) => {
          if (viewportRect.width < 1300) {
            subBtnId = 'subscribeSendIconBtn'
          }
          cy.wait(1000)
          cy.getByContains('basket')
            .trigger('mouseover')
            .wait(waitTime)
            .click('topLeft')
            .wait(1000)
            .getByContains('profile-iconbutton-second-badge')
            .click()
            .wait(waitTime)
            .get('.MuiPopover-root')
            .click()
            .then(() => {
              if (viewportRect.width > 1000) {
                cy.getByContains('NavBarItem')
                  .children()
                  .eq(0)
                  .click({ force: true })
                  .wait(waitTime)
                  .getByContains('NavBarItem')
                  .eq(1)
                  .click({ force: true })
                  .wait(waitTime)
                  .getByContains('NavBarItem')
                  .eq(2)
                  .click({ force: true })
                  .wait(waitTime)
                  .click('topLeft')
                  .wait(waitTime)
                cy.scrollTo(0, 5000, {
                  easing: 'linear',
                  duration: 7000,
                }).wait(waitTime)
              } else {
                cy.getByContains('hamMenuBtn')
                  .click()
                  .then(() => {
                    cy.getByContains('NavBarItem')
                      .children()
                      .eq(0)
                      .click({ force: true })
                      .wait(waitTime)
                      .getByContains('NavBarItem')
                      .eq(1)
                      .click({ force: true })
                      .wait(waitTime)
                      .getByContains('NavBarItem')
                      .eq(2)
                      .click({ force: true })
                      .wait(waitTime)

                    cy.get('.MuiDrawer-modal').click('topLeft').wait(waitTime)

                    cy.scrollTo(0, 5000, {
                      easing: 'linear',
                      duration: 7000,
                    }).wait(waitTime)
                  })
              }
              cy.getByContains('subscribeTextField')
                .type('just for test')
                .getByContains(subBtnId)
                .click()
                .wait(waitTime)
                .getByContains('subscribeTextField')
                .find('input')
                .focus()
                .clear()
                .getByContains('subscribeTextField')
                .type('test@floeamaid.com')
                .wait(waitTime)
                .getByContains(subBtnId)
                .click()
                .wait(waitTime)
                .getByContains('subscribeTextField')
                .find('input')
                .focus()
                .clear()
                .then(() => {
                  cy.scrollTo(0, 0, {
                    easing: 'linear',
                    duration: 2000,
                  })
                })
            })
        })
    })
  })
})
