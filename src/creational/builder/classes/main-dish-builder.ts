import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Beans', 10);
    const meat = new Meat('Meat', 20);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBevarage(): this {
    const bevarege = new Beverage('Bebida', 7);
    this._meal.add(bevarege);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Dessert', 9);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
  getPrice(): number {
    return this._meal.getPrice();
  }
}
