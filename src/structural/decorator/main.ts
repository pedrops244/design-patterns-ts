import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);

console.log(tShirt.getPrice());
console.log(tShirtWithStamp.getPrice());
console.log(tShirt.getName());
console.log(tShirtWithStamp.getName());
