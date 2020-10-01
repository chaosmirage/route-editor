import selectors from '../support/selectors';

const {
  addPointButtonSelector,
  pointNameInputSelector,
  mapSelector,
} = selectors;

const FIRST_POINT = {
  ID: 1,
  NAME: 'First point',
};

const SECOND_POINT = {
  ID: 2,
  NAME: 'Second point',
};

describe('App test', function () {
  beforeEach(function () {
    cy.visit('/')
  });

  it('Points list functionality works', () => {
    cy
      .get(mapSelector());

    cy.get(addPointButtonSelector()).should('be.disabled');

    cy.addItemToPointsList(FIRST_POINT.NAME);
    cy.addItemToPointsList(SECOND_POINT.NAME);

    cy.pointsListContainsPoint(FIRST_POINT.NAME, FIRST_POINT.ID);
    cy.pointsListContainsPoint(SECOND_POINT.NAME, SECOND_POINT.ID);

    cy.deletePoint(FIRST_POINT.ID);
    cy.deletePoint(SECOND_POINT.ID);

    cy.pointsListDoesNotContainPoint(FIRST_POINT.ID);
    cy.pointsListDoesNotContainPoint(SECOND_POINT.ID);

    cy.get(pointNameInputSelector()).should('have.value', '');
  });
})
