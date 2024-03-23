**# Pricing Module and User Registration API**

This project implements a backend pricing module and REST API for a ride-hailing service using Node.js. It determines whether a user needs to register (provide email) to check the price based on the following logic:

**User Registration Required:**

- **Distance:** If the distance to the pickup location is greater than 30 kilometers.
- **City Flag:** If the city has a "City Flag" set to true (indicating mandatory registration for unflagged cities).
- **Price:** If the estimated price is less than 50 dollars.

**REST API**

The API takes a JSON payload containing the following fields:

- `city`: User's city (string)
- `latitude`: User's latitude (number)
- `longitude`: User's longitude (number)

**Features:**

- **Pricing Schema:** Uses a pre-defined schema (refer to the provided snapshot) to calculate estimated prices based on city, vehicle type, airport fees, hourly rates, per-kilometer charges, base amount, and base kilometers.
- **Google Geocode API:** Integrates with the Google Geocode API to determine the distance between the user's location and the pickup point.
- **Error Handling:** Returns appropriate error codes for invalid payload formats.
- **Long Distance Response:** For distances exceeding 1000 kilometers, the API returns a "too far to offer ride" message.

**Dependencies:**

This project relies on the following external libraries:

- express (web framework)
- axios (HTTP client for Google Geocode API)
- validator (optional, for payload validation)

**Installation:**

1. Clone this repository.
2. Install dependencies: `npm install` (or `yarn install`)

**Usage:**

1. Start the server (refer to the `server.js` file for specific instructions).
2. Send a POST request to the API endpoint (e.g., `/api/v1/pricing`) with a valid JSON payload containing `city`, `latitude`, and `longitude`.
3. The response will be a JSON object indicating whether email registration is required.

**Contribution Guidelines:**

Please refer to the `CONTRIBUTING.md` file for instructions on contributing to this project. This file may include details on formatting pull requests, coding conventions, and testing requirements.

**Disclaimer**

This example assumes basic knowledge of Node.js, REST APIs, and Google Geocode API integration. You may need to adapt the instructions and code based on your specific implementation and testing setup.
