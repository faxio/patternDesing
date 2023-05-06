import { Transport } from "./Transport";

export abstract class Logistics {
  abstract crearTransporte(): Transport;

  public deliver(): void {
    const transporte = this.crearTransporte();
    transporte.deliver();
  }
}
