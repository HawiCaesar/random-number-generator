const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const sortPhoneNumbers = require("./sortingFunction");

let sortOrderAlgo = [""];
let sortOrderInt;

const initiateSorting = () => {
  readLine.question(
    "How do you want to sort the phone numbers ? Type 1 for ascending. Type 2 for descending \n",
    sortOrderString => {
      try {
        sortOrderInt = parseInt(sortOrderString);

        if (sortOrderInt === 1) {
          //console.log("Phone numbers will be sorted in ascending order");
          sortOrderAlgo[0] = "asc";
        } else if (sortOrderInt === 2) {
          //console.log("Phone numbers will be sorted in descending order");
          sortOrderAlgo[0] = "desc";
        }
        sortPhoneNumbers(sortOrderAlgo, sortOrderInt);
      } catch (error) {
        //console.log(error);
        return;
      }
      readLine.close();
    }
  );
};

module.exports = {
  initiateSorting
};
