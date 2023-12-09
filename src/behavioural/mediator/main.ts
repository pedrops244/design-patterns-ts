import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camiseta', price: 49.99 });
seller1.addProduct({ id: '2', name: 'Caneca', price: 2.44 });
const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Carro', price: 1000 });
seller2.addProduct({ id: '4', name: 'PC', price: 50 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
