const fileStore = require("./helpers/fileStore");

const getRandomDigit = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generatePhoneNumber = () => {
  let tempPhoneNumberString = "";

  for (let i = 0; i < 9; i++) {
    let phoneDigit = getRandomDigit(1, 9);
    tempPhoneNumberString += "" + phoneDigit + "";
  }

  return "0" + tempPhoneNumberString;
};

const savePhoneNumbersToFile = phoneNumberObject => {
  fileStore.create("phoneNumbers", phoneNumberObject, (error, data) => {
    if (!error) {
      //console.log("Phone Number created. Check out phoneNumbers.json file");
      return "saved";
    } else {
      //console.log(error);
      return `Error when saving file, ${error}`;
    }
  });
};

const generatePhoneNumbers = () => {
  let allPhoneNumbers = [];

  while (allPhoneNumbers.length < 50) {
    let phoneNumber = generatePhoneNumber();

    if (allPhoneNumbers.indexOf(phoneNumber) === -1) {
      allPhoneNumbers.push(phoneNumber);
    }
  }

  savePhoneNumbersToFile({
    totalPhoneNumbersGenerated: allPhoneNumbers.length,
    list: allPhoneNumbers
  });
};

module.exports = {
  generatePhoneNumber,
  generatePhoneNumbers,
  savePhoneNumbersToFile
};
