export class Remote {
  constructor(protected device: Device) {}

  togglePower() {
    this.device.isEnabled() ? this.device.disabled() : this.device.enabled();
  }
  volumeDown() {
    this.device.setVolume(-1);
  }
  volumeUp() {
    this.device.setVolume(1);
  }
}

export class RemoteAdvanced extends Remote {
  async timeToOff(tiempo: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.device.disabled();
        resolve();
      }, tiempo);
    });
  }
}

export interface Device {
  isEnabled(): boolean;
  enabled(): void;
  disabled(): void;
  getVolume(): number;
  setVolume(percent: number): void;
}

export class Radio implements Device {
  private powerState: boolean = false;
  private volume: number = 1;
  constructor() {}

  isEnabled(): boolean {
    return this.powerState;
  }
  enabled(): void {
    this.powerState = true;
  }
  disabled(): void {
    this.powerState = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(percent: number): void {
    this.volume += percent;
  }
}

export class TV implements Device {
  private powerState: boolean = false;
  private volume: number = 5;
  constructor() {}

  isEnabled(): boolean {
    return this.powerState;
  }
  enabled(): void {
    this.powerState = true;
  }
  disabled(): void {
    this.powerState = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(percent: number): void {
    this.volume += percent;
  }
}
