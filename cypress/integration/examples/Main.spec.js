describe('App test', function () {
  it('Positive: add point', () => {
    cy.visit('/');

    cy
      .get('[data-test="point-name-input"]')
      .type('First point')
      .should('have.value', 'First point')
      .get('[data-test="add-point-button"]')
      .click();
  });
})
