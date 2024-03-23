const axios = require("axios");
const Pricing = require("../models/PricingModel");
const { calculatDistance } = require("../utils/distanceCalculator");
const { validationResult } = require("express-validator");

exports.checkPrice = async (req, res) => {
  try {
    // Extract request payload
    const { origin, destination, price } = req.body;

    // calculating distance using google geocoding api
    const distance = await calculatDistance(origin, destination);

    // fetch pricing data based on city
    const pricingData = await Pricing.findOne({ city: origin.city });

    // validate request Payload
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status[500].json({errors:errors.array()})
    }

    // check condition for registration
    const registrationNeeded = false;
    if (distance > 30 || !pricingData || Pricing < 50) {
      registrationNeeded = true;
    }

    // response
    res.json({ registrationNeeded });
  } catch (error) {
    console.log("error");
    res
      .status(500)
      .json({ message: "Internal server error in pricingController" });
  }
};
