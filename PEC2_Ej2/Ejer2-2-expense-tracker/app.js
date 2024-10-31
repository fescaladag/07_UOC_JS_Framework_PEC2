// import './models/expense.models.js';
// import './services/expense.service.js';
// import './controller/expense.controller.js';
// import './view/expense.view.js'

import { transactionController } from './controller/expense.controller.js';
import { transactionService } from './services/expense.service.js';
import { transactionView } from './view/expense.view.js';


// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  const app = new transactionController(new transactionService(), new transactionView());
});

