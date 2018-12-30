//This is how an object is declared / created.
var hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ['twin','double','suite'],

  checkAvailability: function(){
    return this.rooms - this.booked;
  }
}
//Dot notation (Calling a object)
var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();
console.log(hotelName, roomsFree);
