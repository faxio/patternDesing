interface Props {
  id: number;
  ruta: string;
  distancia: Number;
  unidadLongitud: string;
}

export class Rutas {
  private strategyRutas: StrategyRutas;
  private Rutas: Array<Props> = [
    {
      id: 1,
      ruta: "Valdivia - Santiago",
      distancia: 855,
      unidadLongitud: "KM",
    },
  ];

  constructor(strategyRutas: StrategyRutas) {
    this.strategyRutas = strategyRutas;
  }

  public setStrategy(strategyRutas: StrategyRutas) {
    this.strategyRutas = strategyRutas;
  }

  public obtenerTiempo(): void {
    const result = this.strategyRutas.obtenerHorasViaje(this.Rutas[0]);
    console.log(`Tiempo estimado de: ${result} Horas`);
  }
}

export interface StrategyRutas {
  obtenerHorasViaje(data: Props): Number;
}

export class ConcreteStrategyBicicleta implements StrategyRutas {
  obtenerHorasViaje(data: Props): Number {
    return +data.distancia * 4;
  }
}

export class ConcreteStrategyAuto implements StrategyRutas {
  obtenerHorasViaje(data: Props): Number {
    return +data.distancia / 100;
  }
}
