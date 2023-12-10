import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class ManagerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('O manager tratou o orçamento');
      budget.approvedd = true;
      return budget;
    }
    return super.handle(budget);
  }
}
