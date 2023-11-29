export abstract class ProductComponent {
  abstract getPrice(): number;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}
export class ProductComposite extends ProductComponent {
  private childen: ProductComponent[] = [];

  add(product: ProductComponent): void {
    this.childen.push(product);
  }

  remove(product: ProductComponent): void {
    const productIndex = this.childen.indexOf(product);
    if (productIndex !== -1) this.childen.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.childen.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const milk = new ProductLeaf('Milk', 7.55);
const cereal = new ProductLeaf('Cereal', 10);
const rice = new ProductLeaf('Rice', 9);

const productBox = new ProductComposite();
productBox.add(milk);
productBox.add(cereal);
productBox.add(rice);
console.log(productBox);
console.log(productBox.getPrice());
