import { DefaultDiscount } from './shopping-cart/default-discount';
import { EcommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';

const shopppingCart = new EcommerceShoppingCart();
shopppingCart.discount = new DefaultDiscount();
shopppingCart.addProuct({ name: 'Camisa', price: 10 });
shopppingCart.addProuct({ name: 'Caneca', price: 90 });
shopppingCart.addProuct({ name: 'Blusinha', price: 90 });
console.log(shopppingCart.getTotal());
console.log(shopppingCart.getTotalWithDiscount());
