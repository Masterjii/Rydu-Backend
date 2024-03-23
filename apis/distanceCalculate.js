const { Client } = require("@googlemaps/google-maps-services-js");
const { param } = require("express-validator");

const client = new Client({});

exports.calculateDistance = async (origin, destination) => {
  try {
    const response = await client.distancematrix({
      params: {
        units: "metric",
        origins: `${origin.lat}, ${origin.lng}`,
        destinations: `${destination.lat}, ${destination.lng}`,
        key: process.env.Google_Api_Key,
      },
      timeout: 1000, //miliseconds
    });

    const distance = response.data.rows[0].elements[0].distance.value;
    // convert distance from meter to km.
    return distance / 1000;
  } catch (error) {
    console.log('error in geocoding:', error); // Log the actual error
    throw new Error('Error in geocoding'); // Optionally rethrow the error for the caller to handle
  }
};
