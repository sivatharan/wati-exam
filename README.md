## Env version
- node version v18.16.0
- npm version 9.5.1

## Setup
- `npm install`

## Available Scripts

In the project directory, you can run:

- `npm start`

## CURL command
curl --location --request POST 'localhost:3000/add' \
--header 'Content-Type: application/json' \
--data-raw '{
    "num1": 1,
    "num2":2
}'