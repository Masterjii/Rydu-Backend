const mongoose = require("mongoose");

const priceingSchema = new mongoose.Schema({
  country: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  VehicleType: {
    type: String,
    trim: true,
    required: true,
  },
  AirportFee: {
    type: Number,
    trim: true,
    required: true,
  },
  AmountPerHour: {
    type: Number,
    trim: true,
    required: true,
  },
  AmountPerKm: {
    type: Number,
    trim: true,
    required: true,
  },
  BaseAmount: {
    type: Number,
    trim: true,
    required: true,
  },
  BaseKm: {
    type: Number,
    trim: true,
    required: true,
  },
});

const PricingModel = mongoose.model("PricingModel", priceingSchema);
module.exports = PricingModel;
