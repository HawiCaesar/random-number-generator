# Random Phone Number Generator

[![CircleCI](https://circleci.com/gh/HawiCaesar/random-number-generator.svg?style=svg)](https://circleci.com/gh/HawiCaesar/random-number-generator)

[![Coverage Status](https://coveralls.io/repos/github/HawiCaesar/random-number-generator/badge.svg?branch=master)](https://coveralls.io/github/HawiCaesar/random-number-generator?branch=master)

## Install

- Clone this repository
- navigate to directory random-number-generator , cd random-number-generator
- run `npm install`

### Generate phone numbers

- run `node index.js`
- This will create a file called phoneNumbers.json. The file will be in the root directory
- a list of phone number are in this file

### Sort phone numbers

- run `node sort.js`. Ensure you have the phoneNumbers.json file.
- follow the prompt.
- a file will be generated based on the choice in the prompt. The file will be in the root directory

### To run tests

- npm test
  NOTE: ensure phoneNumbers.json and sortingPhoneNumbers[sort value].json are not create and in the root directory
