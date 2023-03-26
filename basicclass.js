// OOP

class Vehicle {
    constructor(name, type, price, engine, tags) {
      this.name = name || "";
      this.type = type || "";
      this.price = price || 0;
      this.engine = engine;
      this.tags = tags || [];
    }
  
    startEngine() {
      console.log("Start Engine");
      this.engine = true;
    }
    stopEngine() {
      console.log("Stop Engine");
      this.engine = false;
    }
  
    showTags() {
      console.log("Show Tags");
      this.tags.forEach((tag, index) => console.log(`${index + 1}. ${tag}`));
    }
  
    addTag(tagName) {
      this.tags.push(tagName);
      console.log(`Tag "${tagName}" has been added`);
    }
  
    removeTag(tagName) {
      this.tags = this.tags.filter((tag) => tag !== tagName);
    }
  }
  
  // Instanctiation => Proses pembuatan class menjadi object class
  let civic = new Vehicle("Honda Civic", "sedan", 5000, false, ["lcgc", "city"]);
  
  // civic.addTag("honda")
  // civic.removeTag("city")
  // civic.showTags()
  
  // civic.startEngine();
  // console.log(civic);
  // civic.stopEngine();
  // console.log(civic);
  // vehicle.startEngine();
  // vehicle.stopEngine();
  
  // Factory Class => class yang berfokus ke method nya
  
  class Showroom {
    constructor(rooms) {
      this.rooms = rooms || [];
    }
    showVehicles() {
      // untuk menampilkan vehicles
      console.log("Vehicle List: ")
      this.rooms.forEach((room,index) =>{
          console.log(`${index+1}. ${room.name}, RP. ${room.price}`)
      } )
    }
    addVehicle(name, type, price) {
      // untuk menambahkan
      this.rooms.push(new Vehicle(name, type, price, false, []));
    }
    deleteVehicle(name){
      this.rooms = this.rooms.filter(room => room.name !== name)
    }
  }
  
  let showroom = new Showroom()
  showroom.addVehicle("Toyota Raize",'suv', 5000)
  showroom.addVehicle("Toyota Agya", 'sedan', 3500)
  showroom.deleteVehicle("Toyota Agya")
  showroom.showVehicles()
  // console.log(showroom.rooms)