function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedln = false;
}

Appliance.prototype.turnOn = function () {
    this.pluggedln = true;
    console.log(`${this.name} включен`);
};

Appliance.prototype.turnOff = function () {
    this.pluggedln = false;
    console.log(`${this.name} выключен`);
};

function DeskLamp(name, power, brightness) {
    Appliance.call(this, name, power);
    this.brightness = brightness;
}

function Computer(name, power, brand) {
    Appliance.call(this, name, power);
    this.brand = brand;
}

DeskLamp.prototype = Object.create(Appliance.prototype);
Computer.prototype = Object.create(Appliance.prototype);

DeskLamp.prototype.turnOn = function () {
    this.pluggedln = true;
    console.log(`${this.name} включена, яркость ${this.brightness}`);
};

Computer.prototype.turnOn = function () {
    this.pluggedln = true;
    console.log(`${this.name} включен, бренд ${this.brand}`);
};

Appliance.prototype.getPower = function () {
    console.log(`${this.name} потребляет ${this.power} Вт`);
};

const lamp = new DeskLamp("Настольная лампа", 30, "средняя");
const computer = new Computer("Компьютер", 500, "Apple");

lamp.turnOn();
computer.turnOn();

lamp.getPower();
computer.getPower();
