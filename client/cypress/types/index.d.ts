// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

type AttachFileProps = {
  subjectType?: 'drag-n-drop'
}
declare namespace Cypress {
  export interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    getByMatch(id: string): Chainable<Element>
    getByContains(id: string): Chainable<Element>
  }
}
