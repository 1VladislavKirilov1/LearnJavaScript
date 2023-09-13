class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedln = false;
    }

    turnOn() {
        this.pluggedln = true;
        console.log(`${this.name} включен`);
    }

    turnOff() {
        this.pluggedln = false;
        console.log(`${this.name} выключен`);
    }
}

class DeskLamp extends Appliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    turnOn() {
        this.pluggedln = true;
        console.log(`${this.name} включена, яркость ${this.brightness}`);
    }
}

class Computer extends Appliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    turnOn() {
        this.pluggedln = true;
        console.log(`${this.name} включен, бренд ${this.brand}`);
    }
}

Appliance.prototype.getPower = function () {
    console.log(`${this.name} потребляет ${this.power} Вт`);
};

const lamp = new DeskLamp("Настольная лампа", 30, "средняя");
const computer = new Computer("Компьютер", 500, "Apple");

lamp.turnOn();
computer.turnOn();

lamp.getPower();
computer.getPower();
