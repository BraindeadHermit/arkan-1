/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import DangerLevelBar from './index';

describe('<DangerLevelBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DangerLevelBar dangerLevel="3" onChange={() => {}} />);
  });
});
