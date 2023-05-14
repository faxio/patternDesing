// Clase con comportamiento normal
export class Clima {
  getTemperatura(temperatura: Number) {
    console.log(`La temperatura en Valdivia es: ${temperatura}`);
  }
}

// La forma en que queremos recibir los datos por el clima
export class ClimaInterface {
  getTemperaturaCelsius(temperatura: Number): Number {
    return (+temperatura - 32) * (5 / 9);
  }
}

// Extensión de la clase Clima -> Implementar la adaptación de la información
export class AdapterTemperatura extends Clima {
  constructor(private climaInterface: ClimaInterface) {
    super();
  }

  getTemperatura(temperatura: Number) {
    const transformarCelsius =
      this.climaInterface.getTemperaturaCelsius(temperatura);
    console.log(`La temperatura en Valdivia es: ${transformarCelsius} Grados`);
  }
}

// Clase que tendrá la temperatura
export class Temperatura {
  private temperatura: Number = 86;

  getTemperatura(): Number {
    return this.temperatura;
  }
}
