import { OrderApproved } from './order-approved';
import { OrderPending } from './order-pending';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('Não posso aprovar o pagamento pois o pedido foi recusado.');
  }
  rejectPayment(): void {
    console.log('O pedido já está no estado pagamento rejeitado.');
  }
  waitingPayment(): void {
    console.log(
      'Não posso mover para pedente pois o pagamento pois o pedido foi recusado.',
    );
  }
  shipOrder(): void {
    console.log('Não posso enviar o pedido com pagamento recusado');
  }
}
