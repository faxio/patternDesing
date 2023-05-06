import { Transport } from "./Transport";

export class Truck implements Transport {
  deliver(): void {
    console.log("Transportando por tierra.....");
  }
}
