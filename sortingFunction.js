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
        console.log("Phone numbers will be sorted in ascending order");
        fileName = "sortedPhoneNumbersAscending";
        phoneNumbersObject.max = sortedArray[sortedArray.length - 1];
        phoneNumbersObject.min = sortedArray[0];
      } else if (userInput === 2) {
        console.log("Phone numbers will be sorted in descending order");
        fileName = "sortedPhoneNumbersDescending";
        phoneNumbersObject.max = sortedArray[0];
        phoneNumbersObject.min = sortedArray[sortedArray.length - 1];
      }

      fileStore.create(fileName, phoneNumbersObject, (error, data) => {
        if (!error) {
          console.log(
            `Checkout ${fileName}.json for sorted list of phone numbers`
          );
          return "saved";
        } else {
          console.log("Error when saving sorted list file");
          return "Error when saving file";
        }
      });
    } else {
      console.log("Phone numbers list does not exist");
      return `Phone numbers do not exist, ${checkError}`;
    }
  });
};

module.exports = sortPhoneNumbers;
