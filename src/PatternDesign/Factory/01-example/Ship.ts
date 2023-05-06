import { Transport } from "./Transport";

export class Ship implements Transport {
  deliver(): void {
    console.log("Transportando por agua......");
  }
}
