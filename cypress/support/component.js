import { mount } from '@cypress/react';
import '@cypress/code-coverage/support';
import '../../src/index.css';

Cypress.Commands.add('mount', mount);
