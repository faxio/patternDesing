import { Shipping } from "./Shipping";

export class Order {
  private lineItems: Array<number> = [];
  private shipping: Shipping;

  constructor(lineItems: Array<number>, shipping: Shipping) {
    this.lineItems = lineItems;
    this.shipping = shipping;
  }

  getLineItems(): Array<number> {
    return this.lineItems;
  }

  getShipping(): Shipping {
    return this.shipping;
  }

  getTotal(): number {
    return this.lineItems.reduce((a, b) => a + b, 10);
  }

  getTotalWeight(): number {
    return 500;
  }

  getShippingCost(): number {
    return this.shipping.getCost(this);
  }
}
