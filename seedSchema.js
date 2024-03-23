const mongoose = require("mongoose");
const PricingModel = require("./models/PricingModel");

const seedData = [
  {
    country: "GB",
    city: "london",
    VehicleType: "Luxury",
    AirportFee: 0.1,
    AmountPerHour: 135,
    AmountPerKm: 2.5,
    BaseAmount: 89,
    BaseKm: 10,
  },
  {
    country: "GB",
    city: "london",
    VehicleType: "Comfort",
    AirportFee: 0.1,
    AmountPerHour: 55,
    AmountPerKm: 1.25,
    BaseAmount: 43,
    BaseKm: 10,
  },
  {
    country: "GB",
    city: "london",
    VehicleType: "Buisness Van",
    AirportFee: 0.1,
    AmountPerHour: 75,
    AmountPerKm: 1.7,
    BaseAmount: 70,
    BaseKm: 10,
  },
  {
    country: "GB",
    city: "london",
    VehicleType: "Mini Van",
    AirportFee: 0.1,
    AmountPerHour: 60,
    AmountPerKm: 1.35,
    BaseAmount: 55,
    BaseKm: 10,
  },
];

async function seedDB(){
    await PricingModel.insertMany(seedData);
    console.log('Data Seeded');
}

module.exports = seedDB;