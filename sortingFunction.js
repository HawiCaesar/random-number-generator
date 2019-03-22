const fileStore = require("./helpers/fileStore");
const orderBy = require("lodash/orderBy");

const sortPhoneNumbers = (sortAlgorithm, userInput) => {
  fileStore.read("phoneNumbers", (readError, fileData) => {
    if (!readError) {
      let fileName = "";

      let sortedArray = orderBy(fileData.list, Number, sortAlgorithm);
      let phoneNumbersObject = {
        sortedList: sortedArray
      };

      if (userInput === 1) {
        fileName = "sortedPhoneNumbersAscending";
        phoneNumbersObject.max = sortedArray[sortedArray.length - 1];
        phoneNumbersObject.min = sortedArray[0];
      } else if (userInput === 2) {
        fileName = "sortedPhoneNumbersDescending";
        phoneNumbersObject.max = sortedArray[0];
        phoneNumbersObject.min = sortedArray[sortedArray.length - 1];
      }

      fileStore.create(fileName, phoneNumbersObject, (error, data) => {
        if (!error) {
          return "saved";
        } else {
          //console.log("Error when saving new file");
          return "Error when saving file";
        }
      });
    } else {
      console.log("no phone numbers");
      return `Phone numbers do not exist, ${checkError}`;
    }
  });
};

module.exports = sortPhoneNumbers;
