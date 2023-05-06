import { Logistics } from "./Logitstics";
import { Ship } from "./Ship";
import { Transport } from "./Transport";

export class SeaLogistics extends Logistics {
  crearTransporte(): Transport {
    return new Ship();
  }
}
