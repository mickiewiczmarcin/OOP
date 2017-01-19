function Telefon(marka, model, cena, kolor, pojemnosc) {
	this.marka = marka;
	this.model = model;
	this.cena = cena;
	this.kolor = kolor;
	this.pojemnosc = pojemnosc;
	}
Telefon.prototype.getWarrantyCost = function(price) {
	return price * 0.1
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", model " + this.model + ", pojemność to " + this.pojemnosc + ", kolor to " + this.kolor + ", a cena to " + this.cena + "zł. Cena rozszerzenia gwarancji to " + this.getWarrantyCost(this.cena) + "zł.");
}
var iPhone6S = new Telefon("Apple", "iPhone6S", 2250, "srebrny", "16GB");
var SamsungGalaxyS7 = new Telefon("Samsung", "Galaxy S7", 3300, "czarny", "32GB");
var OnePlusOne = new Telefon("OnePlus", "One", 1600, "biały", "32GB");
iPhone6S.printInfo();
SamsungGalaxyS7.printInfo();
OnePlusOne.printInfo();