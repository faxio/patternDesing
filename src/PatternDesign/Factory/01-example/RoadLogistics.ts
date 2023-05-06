import { Logistics } from "./Logitstics";
import { Transport } from "./Transport";
import { Truck } from "./Truck";

export class RoadLogistics extends Logistics {
  crearTransporte(): Transport {
    return new Truck();
  }
}
