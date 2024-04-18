# Team Sammard's Testing API

Welcome to the documentation to Team Sammard's testing API. This API provides access to various resources and functionalities necessary to simulate and test codes and softwares.

## Endpoints

### 1. `/datapacket/temperature` (GET)

This endpoint retrieves temperature data, along with the timestamp.

- **Method:** GET
- **Url:** https://team-sammard/datapacket/temperature
- **Response:**
  - JSON object with the following fields:
    - `timestamp`: The timestamp indicating when the temperature data was retrieved, in seconds.
    - `temperature`: The temperature value in Celsius of the payload onboard the rocket.

### 2. `/datapacket/humidity` (GET)

This endpoint retrieves humidity data.

- **Method:** GET
- **Url:** https://team-sammard/datapacket/temperature
- **Response:**
  - JSON object with the following fields:
    - `timestamp`: The timestamp indicating when the humidity data was retrieved, in seconds.
    - `humidity`: The humidity value as a percentage.

### 3. `/datapacket/pressure` (GET)

This endpoint retrieves pressure data.

- **Method:** GET
- **Url:** https://team-sammard/datapacket/temperature
- **Response:**
  - JSON object with the following fields:
    - `timestamp`: The timestamp indicating when the pressure data was retrieved, in seconds.
    - `pressure`: The pressure value in hectopascals (hPa).

## Example Usage

### Retrieve Temperature Data



